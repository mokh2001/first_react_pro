import "./CartTwo.css";
import Small_img_1 from "./asserts/images/icon-cart.svg";

import plus from "./asserts/images/icon-plus.svg"
import minus from "./asserts/images/icon-minus.svg"

export default function CartTwo() {
  return (
    <div className="CartTwo_main">

      <div className="Paragragh">
        <h6>SNEAKER COMPANY</h6>
        <h1>
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p>
          These low-profile sneakers are your perfect casual wear <br />
          companion Featuring a durable rubber outer sale ,they'll <br />
          withstand everything the weather can offer.
        </p>
      </div>

      <div className="Price">
        <h2>$125.00</h2> 
        <div>50%</div>
      </div>
        <div className="old_price">
            $250
        </div>
      <div className="buttons">
        <div className="three_buttons">
            <button className="minus">
                <img src={minus} alt="minus"/>
            </button>
            <button className="zero">0</button>
            <button className="plus">
                <img src={plus} alt="plus"/>
            </button>
        </div>

        
        <div>
            <button className="add_cart_btn">
                <img src={Small_img_1} alt="img "></img>
                <span>Add to cart</span>
            </button>
        </div>
      </div>

    </div>
  );
}
