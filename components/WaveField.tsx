"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * A lightweight Three.js "audio wave" field for the hero backdrop.
 * A grid of points ripples like a soundfield, on-brand for an audio company,
 * and cheap enough to run smoothly on the hero without a physics/particle library.
 */
export default function WaveField() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.set(0, 2.4, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    // Grid of points
    const COLS = 90;
    const ROWS = 42;
    const GAP = 0.22;
    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let z = 0; z < ROWS; z++) {
        positions[i++] = (x - COLS / 2) * GAP;
        positions[i++] = 0;
        positions[i++] = (z - ROWS / 2) * GAP;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: new THREE.Color("#C21A5A"),
      size: 0.032,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Subtle white points overlay for depth
    const material2 = new THREE.PointsMaterial({
      color: new THREE.Color("#ffffff"),
      size: 0.015,
      transparent: true,
      opacity: 0.35,
    });
    const points2 = new THREE.Points(geometry.clone(), material2);
    scene.add(points2);

    let mouseX = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    const clock = new THREE.Clock();
    let raf = 0;

    const animate = () => {
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      let idx = 0;
      for (let x = 0; x < COLS; x++) {
        for (let z = 0; z < ROWS; z++) {
          const px = (x - COLS / 2) * GAP;
          const pz = (z - ROWS / 2) * GAP;
          const d = Math.sqrt(px * px + pz * pz);
          const y =
            Math.sin(d * 1.6 - t * 1.8) * 0.28 +
            Math.sin(px * 0.6 + t * 0.9) * 0.12;
          pos.setY(idx, y);
          idx++;
        }
      }
      pos.needsUpdate = true;
      (points2.geometry.attributes.position as THREE.BufferAttribute).copy(pos);
      points2.geometry.attributes.position.needsUpdate = true;

      // Gentle parallax toward the cursor
      const targetRotY = mouseX * 0.25;
      points.rotation.y += (targetRotY - points.rotation.y) * 0.04;
      points2.rotation.y = points.rotation.y;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      material2.dispose();
      points2.geometry.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mount} className="absolute inset-0 h-full w-full" aria-hidden />;
}
