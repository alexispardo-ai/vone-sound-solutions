import { cn } from "@/lib/utils";

/**
 * VONE wordmark, rebuilt as clean type so it stays crisp at any size and
 * inherits currentColor. The circular photographic badge (the supplied logo)
 * lives in /public/logo.png and is used in the footer / social contexts.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display text-xl font-semibold tracking-tightest",
        className
      )}
      aria-label="VONE · Vibrational One"
    >
      <span className="text-signal">V</span>
      <span className="text-current">ONE</span>
      <span className="ml-2 hidden text-[0.5rem] font-medium uppercase tracking-[0.3em] text-chalk-dim sm:inline">
        Vibrational&nbsp;One
      </span>
    </span>
  );
}
