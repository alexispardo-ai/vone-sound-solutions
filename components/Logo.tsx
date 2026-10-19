import { cn } from "@/lib/utils";

/**
 * VONE wordmark, using the real brand logo (the "V ONE" mark, transparent
 * background so it sits cleanly on the dark nav and glass header).
 * Height is controlled via className (e.g. h-6, h-7).
 */
export default function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-wordmark.png"
      alt="VONE · Vibrational One"
      className={cn("h-6 w-auto select-none md:h-7", className)}
      draggable={false}
    />
  );
}
