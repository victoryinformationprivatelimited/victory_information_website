import Image from "next/image";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Victory Information (Pvt) Ltd"
      width={642}
      height={389}
      priority
      className={className}
    />
  );
}

// The logo's grey lettering is low-contrast on dark backgrounds, so it sits on a white card.
export function LogoLight({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <span className="inline-block rounded-xl bg-white px-3 py-2">
      <Logo className={className} />
    </span>
  );
}
