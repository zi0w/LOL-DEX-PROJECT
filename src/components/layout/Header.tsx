import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 border-b border-b-black dark:border-b-white border-t-0 dark:bg-[#020817]">
      <Link href={"/"}>
        <Image
          src="/icons/lol.webp"
          alt="main icon"
          width={24}
          height={24}
          className="dark:invert"
        />
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
