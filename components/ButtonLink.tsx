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
      ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:from-purple-500 hover:to-fuchsia-500 shadow-md shadow-purple-900/30"
      : "border border-purple-500/30 bg-purple-950/30 text-white hover:border-purple-400 hover:bg-purple-900/40";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 active:scale-95 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
