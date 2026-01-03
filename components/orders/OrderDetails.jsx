import { usdFormatter } from "@/util/formatter";
import classes from "./OrderDetails.module.css";
import { products } from "@/util/product_details";
import Image from "next/image";

export default function OrderDetails({ orderData }) {
  let totalPrice = 0;
  return (
    <div className={classes.order}>
      <div className={classes.title_container}>
        <h1>Order Details</h1>
      </div>

      {orderData.map((item) => (
        <div key={item.id} className={classes.container}>
          <h5>Order Date: {item.date_ordered}</h5>

          {item.orders.map((product) => {
            totalPrice += product.price * product.quantity;

            const foundProduct = products.find(
              (item) => item.name === product.name
            );

            return (
              <div key={product.id} className={classes.order_details}>
                <div className={classes.image_container}>
                  <Image
                    src={foundProduct.main}
                    alt={foundProduct.alt}
                    width={50}
                  />
                </div>
                <div className={classes.product_description}>
                  <h2>{product.name}</h2>
                  <h4>
                    {usdFormatter.format(product.price)} x {product.quantity}
                  </h4>
                </div>
                <div className={classes.product_price}>
                  <h2>
                    {usdFormatter.format(product.price * product.quantity)}
                  </h2>
                </div>
              </div>
            );
          })}

          <hr />
          <div className={classes.total}>
            <h2>Total</h2>
            <h2>{usdFormatter.format(totalPrice)}</h2>
          </div>
          <div className={classes.delivery_date_container}>
            <h3>Estimated Delivery Date</h3>
            <h4>{item.date_to_deliver}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
