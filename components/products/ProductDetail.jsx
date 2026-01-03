import classes from "./ProductDetail.module.css";
import Image from "next/image";
import { usdFormatter } from "@/util/formatter";
import arrowDropDownIcon from "@/public/arrow_drop_down_24px.svg";
import arrowDropUpIcon from "@/public/arrow_drop_up_24px.svg";
import { useState } from "react";
import ProductShowcase from "./ProductShowcase";

export default function ProductDetail({ product, addToCart, isPending }) {
  const [quantity, setQuantity] = useState(0);
  const [isChanged, setIsChange] = useState(false);

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((prevQuantity) =>
      prevQuantity === 0 ? prevQuantity : prevQuantity - 1
    );
  }

  function handleChangeImage() {
    setIsChange((prevChange) => !prevChange);
  }

  return (
    <><div className={classes.productDetail}>
      <div className={classes.images}>
        <Image
          src={ isChanged ? product.main : product.lifestyle}
          width={150}
          alt={product.alt}
          loading="eager"
          onClick={handleChangeImage}
          className={isChanged ? "" : classes.active}
        />
        <Image
          src={ isChanged ? product.lifestyle : product.main}
          width={400}
          alt={product.alt}
          loading="eager"
          onClick={handleChangeImage}
          className={isChanged ? classes.active : ""}
        />
      </div>
      <div className={classes.texts}>
        <h1>{product.name}</h1>
        <p>{product.size}</p>
        <h2>{usdFormatter.format(product.price)}</h2>
        <p>{product.description}</p>
        <div className={classes.actions}>
          <Image
            onClick={handleDecreaseQuantity}
            src={arrowDropDownIcon}
            alt="Arrow drop down"
          />
          <h2>{quantity}</h2>
          <Image
            onClick={handleIncreaseQuantity}
            src={arrowDropUpIcon}
            alt="Arrow drop up"
          />
          <button
            onClick={() => addToCart(quantity, setQuantity)}
            disabled={isPending}
          >
            {isPending ? "Adding to Cart.." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
    <ProductShowcase /></>
    
  );
}
