import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden mr-1 md:mr-2">
        <Image
          src={profileImg}
          alt="vatsphere logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        Complyance
      </span>
    </Link>
  );
};

export default Logo;
