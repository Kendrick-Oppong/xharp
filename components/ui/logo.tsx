import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/xharp.png"
      width={94}
      height={35}
      alt="xharp"
      className={className}
    />
  );
};
