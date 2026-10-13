import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function ButtonLink({ href, children, variant = "solid", className = "" }: Props) {
  const styles =
    variant === "solid"
      ? "bg-ember text-white hover:bg-ember-bright"
      : "border border-white/15 bg-white/[0.03] text-white hover:border-white/40 hover:bg-white/[0.06]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
