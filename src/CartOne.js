import productImage_1 from "./asserts/images/image-product-1.jpg";
import productImage_2 from "./asserts/images/image-product-2.jpg";
import productImage_3 from "./asserts/images/image-product-3.jpg";
import productImage_4 from "./asserts/images/image-product-4.jpg";


import img_small1 from "./asserts/images/image-product-1-thumbnail.jpg";
import img_small2 from "./asserts/images/image-product-2-thumbnail.jpg";
import img_small3 from "./asserts/images/image-product-3-thumbnail.jpg";
import img_small4 from "./asserts/images/image-product-4-thumbnail.jpg";

import React, { useState } from "react"
import "./CartOne.css";
export default function CartOne() {

  const img=[
    productImage_1,
    productImage_2,
    productImage_3,
    productImage_4
  ]
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="main_class">
      <div className="big_img">
        <img src={img[activeIndex]} alt="Product 1" />
      </div>
      {/*for img*/}
      {/*for small img*/}
      <div className="small_imgs">
        <button onClick={() => setActiveIndex(0)}>
          <img src={img_small1} alt="Product 1" />
        </button>

        <button onClick={() => setActiveIndex(1)}>
          <img src={img_small2} alt="Product 1" />
        </button>

        <button onClick={() => setActiveIndex(2)}>
          <img src={img_small3} alt="Product 1" />
        </button>
        <button onClick={() => setActiveIndex(3)}>
          <img src={img_small4} alt="Product 1" />
        </button>
      </div>
      {/*for small img*/}
    </div>
  );
}
