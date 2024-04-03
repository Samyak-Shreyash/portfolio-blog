import profileImg from "@/public/samyak-logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4 after:">
        <Image
          src={profileImg}
          alt="SamBlogs"
          className="w-full h-auto rounter-full"
        />
      </div>
      <span className="font-bold text-xl">SamDev</span>
    </Link>
  );
};

export default Logo;
