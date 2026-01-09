import "./Header.css";
import Small_img_1 from "./asserts/images/icon-cart.svg";
import Small_img_2 from "./asserts/images/image-avatar.png";

export default function Header() {
  return (
    <div className="parant">
      <div className="main_header">
        {/* FRIST NAV*/}
        <div>
          <nav>
            <a href="/" className="sneakers">
              sneakers
            </a>
            <a href="/">Collections</a>
            <a href="/">Men</a>
            <a href="/">Women</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </nav>
        </div>
        {/* FRIST NAV*/}

        {/*SECOND NAV*/}
        <div>
          <nav>
            <a href="/">
              <img src={Small_img_1} alt="sm1" />
            </a>
            {/* img1 */}
            <a href="/">
              <img src={Small_img_2} alt="sm1"  width="40" height="40" />
            </a>
            {/* img2 */}
          </nav>
        </div>
        {/*SECOND NAV*/}
      </div>

      <hr />
    </div>
  );
}
