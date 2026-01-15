import Image from "next/image";
import LogoImg from "../public/logo.png";

export default function Logo() {
  return (
    <div className="relative w-full h-full">
      <Image
        src={LogoImg}
        alt="Zeutex Logo"
        fill
        style={{ objectFit: "contain" }}
        priority
        sizes="200px"
      />
    </div>
  );
}
