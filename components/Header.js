import HeaderLogo from "/public/headerLogo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src={HeaderLogo}
                  alt="Header Logo"
                />
              </Link>
            </div>
            {/*header_logo*/}
            <ul className={"header_menu"}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/users">Users</Link>
              </li>
              <li>
                <Link href="/posts">Posts</Link>
              </li>
            </ul>
            {/*header_menu*/}
          </div>
          {/*header*/}
        </div>
        {/*container*/}
      </div>
      {/*header#*/}
    </>
  );
}

export default Header;
