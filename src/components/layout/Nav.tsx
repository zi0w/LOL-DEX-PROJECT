import Link from "next/link";
import DarkMode from "./DarkMode";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-5 font-light">
        <li>
          <Link href={"/champions"}>챔피언</Link>
        </li>
        <li>
          <Link href={"/items"}>아이템</Link>
        </li>
        <li>
          <Link href={"/rotation"}>로테이션</Link>
        </li>
        <li className="flex items-center">
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
