import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "primary" | "secondary";
}

export const Logo = ({ className, variant = "primary" }: LogoProps) => {
  const src = variant === "primary" ? "/xharp.png" : "/xharp-secondary.png";

  return (
    <Image
      src={src}
      width={94}
      height={35}
      alt="xharp logo"
      className={className}
      priority
    />
  );
};
