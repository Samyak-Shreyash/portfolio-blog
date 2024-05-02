import profileImg from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import siteMetaData from "../../utils/siteMetaData";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-black dark:text-light ">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-black dark:border-light mr-2 md:mr-4ss">
        <Image
          src={profileImg}
          alt="SamBlogs"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="hidden sm:inline font-bold dark:font-semibold text-lg md:text-xl ">
        {siteMetaData.author}
      </span>
    </Link>
  );
};

export default Logo;
