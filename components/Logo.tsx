import { cn } from "@/lib/utils";

/**
 * vONE principal wordmark from the brand manual (v2.0), white version.
 * The brand's own web uses it at 30px high in the header.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/vONE_principal_blanco.svg"
      alt="vONE · Vibrational One"
      className={cn("h-[26px] w-auto select-none md:h-[30px]", className)}
      draggable={false}
    />
  );
}
