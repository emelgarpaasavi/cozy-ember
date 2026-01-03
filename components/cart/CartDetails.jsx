import { usdFormatter } from "@/util/formatter";
import classes from "./CartDetails.module.css";
import { products } from "@/util/product_details";
import Image from "next/image";
import deleteIcon from "@/public/close_24px.svg";
import arrowDropDownIcon from "@/public/arrow_drop_down_24px.svg";
import arrowDropUpIcon from "@/public/arrow_drop_up_24px.svg";

export default function CartDetails({
  cartData,
  changeQuantity,
  deleteToCart,
  addToOrder,
}) {
  let totalPrice = 0;
  return (
    <div className={classes.cart_details}>
      <h1>Your Cart</h1>
      <div className={classes.container}>
        {cartData.map((product) => {
          const foundProduct = products.find(
            (item) => item.name === product.name
          );
          totalPrice += product.price * product.quantity;
          return (
            <div key={product.id} className={classes.products}>
              <div className={classes.product_details}>
                <Image
                  onClick={() => deleteToCart(product.id)}
                  className={classes.delete_icon}
                  src={deleteIcon}
                  alt="Delete icon"
                />
                <Image
                  src={foundProduct.main}
                  alt={foundProduct.alt}
                  width={50}
                />
                <div className={classes.text}>
                  <h2>{product.name}</h2>
                  <p>{usdFormatter.format(product.price)}</p>
                </div>
              </div>

              <div className={classes.product_price}>
                <div className={classes.quantity}>
                  <Image
                    onClick={() =>
                      changeQuantity(product.id, product.quantity - 1)
                    }
                    src={arrowDropDownIcon}
                    alt="Arrow dropdown icon"
                  />
                  <p>{product.quantity}</p>
                  <Image
                    onClick={() =>
                      changeQuantity(product.id, product.quantity + 1)
                    }
                    src={arrowDropUpIcon}
                    alt="Arrow dropup icon"
                  />
                </div>
                <h2>{usdFormatter.format(product.price * product.quantity)}</h2>
              </div>
            </div>
          );
        })}
        <hr />
      </div>
      <div className={classes.checkout}>
        <div className={classes.total_price}>
          <h2>Total</h2>
          <h2>{usdFormatter.format(totalPrice)}</h2>
        </div>
        <div>
          <button onClick={addToOrder}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
