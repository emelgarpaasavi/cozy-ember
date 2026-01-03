import OrderDetails from "@/components/orders/OrderDetails";
import { fetch_cart_data, fetch_order_data } from "@/lib/fetch-data";

export default function Orders({ orders }) {
    return <OrderDetails orderData={orders}/>
}

export async function getServerSideProps(context) {
  const cartData = await fetch_cart_data();
  const orderData = await fetch_order_data();
  context.res.setHeader("Cache-Control", "no-store");

  return {
    props: {
      cart: cartData,
      orders: orderData,
    },
  };
}