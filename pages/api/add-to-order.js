// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";
import { addDays } from "date-fns";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const currentDate = new Date();
    // the delivery date is 3 days after the date of order
    const deliveryDate = addDays(currentDate, 3);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedCurrentDate = currentDate.toLocaleDateString("en-US", options);
    const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", options);

    try {
      // connect to MongoDb
      const client = await MongoClient.connect(
        "mongodb+srv://jasjas:jaskie12@cozyembercluster.cpvjokk.mongodb.net/"
      );

      // create database
      const db = client.db("cozyember");
      // holds multiple meetup documents
      const storeCartCollection = db.collection("cart");
      const storeOrdersCollection = db.collection("order");

      //   insert cart data to order collection
      await storeOrdersCollection.insertOne({
        orders: data.cart,
        date_ordered: formattedCurrentDate,
        date_to_deliver: formattedDeliveryDate,
      });

      //   delete all documents in cart collection
      await storeCartCollection.deleteMany({});

      // close db
      client.close();

      // return response
      res.status(201).json({ message: "Data added to cart!" });
    } catch (error) {
      throw Error("Unable to update database");
    }
  }
}
