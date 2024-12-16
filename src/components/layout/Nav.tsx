import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-3 font-light">
        <li>
          <Link href={"/champions"}>챔피언</Link>
        </li>
        <li>
          <Link href={"/items"}>아이템</Link>
        </li>
        <li>
          <Link href={"/rotation"}>로테이션</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;