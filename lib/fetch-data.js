import { MongoClient } from "mongodb";

const url = "mongodb+srv://jasjas:jaskie12@cozyembercluster.cpvjokk.mongodb.net/";

async function fetch_cart_data() {
  // connect to MongoDb
  const client = await MongoClient.connect(url);

  // access database
  const db = client.db("cozyember");
  // get add to cart collections data
  const cart = db.collection("cart");
  const cartData = await cart.find().toArray();

  // close connection
  client.close();

  // format the data
  const formattedCartData = cartData?.map((cart) => ({
    id: cart._id.toString(),
    name: cart.name,
    price: cart.price,
    quantity: cart.quantity,
  }));

  return formattedCartData;
}

async function fetch_order_data() {
  // connect to MongoDb
  const client = await MongoClient.connect(url);

  // access database
  const db = client.db("cozyember");
  // get order collections data
  const order = db.collection("order");
  const orderData = await order.find().toArray();

  // close connection
  client.close();

  // format the data
  const formattedOrderData = orderData?.map((order) => ({
    id: order._id.toString(),
    orders: order.orders,
    date_ordered: order.date_ordered,
    date_to_deliver: order.date_to_deliver,
  }));

  return formattedOrderData;
}

export { fetch_cart_data, fetch_order_data };
