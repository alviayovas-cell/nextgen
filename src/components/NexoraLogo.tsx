import Image from "next/image";

/** Nexora (Student AI & Innovation Community) logo. The artwork has its own black background. */
export default function NexoraLogo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/nexora-logo.webp"
      alt="Nexora: Student AI & Innovation Community logo"
      width={1254}
      height={1254}
      priority={priority}
      className={`aspect-square rounded-3xl border border-white/10 object-cover ${className}`}
    />
  );
}
