import Link from "next/link";
import FooterLogo from "/public/footerLogo.svg";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_top">
              <div className="footer_top_left">
                <Image
                  className="img_fluid"
                  src={FooterLogo}
                  alt="Header Logo"
                />
              </div>
              <ul className="footer_top_right">
                <li>
                  <Link href="/">+91 12345 09876</Link>
                </li>
                <li>
                  <Link href="/">info@example.com</Link>
                </li>
              </ul>
            </div>
            {/*footer_top*/}
            <hr className="hr" />
            <div className="footer_bottom">
              <ul className="footer_bottom_left">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Technologies</Link>
                </li>
                <li>
                  <Link href="/">Projects</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
              <div className="footer_bottom_right">
                <p>
                  Designed and built by
                  <span>Pavan MG</span>
                  with Love &<span>Coffee</span>
                </p>
              </div>
            </div>
            {/*footer_bottom*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}
    </>
  );
}

export default Footer;
