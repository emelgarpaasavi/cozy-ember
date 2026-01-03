import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    // connect to MongoDb
    const client = await MongoClient.connect(
      "mongodb+srv://jasjas:jaskie12@cozyembercluster.cpvjokk.mongodb.net/"
    );

    // access database
    const db = client.db("cozyember");
    // get add to cart collections data
    const storeCartCollection = db.collection("cart");
    const cartData = await storeCartCollection.find().toArray();

    // close connection
    client.close();

    // format the data
    const formattedCartData = cartData?.map((cart) => ({
      id: cart._id.toString(),
      name: cart.name,
      price: cart.price,
      quantity: cart.quantity,
    }));

    res.status(200).json(formattedCartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
}
