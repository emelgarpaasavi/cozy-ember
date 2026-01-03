// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      // connect to MongoDb
      const client = await MongoClient.connect(
        "mongodb+srv://jasjas:jaskie12@cozyembercluster.cpvjokk.mongodb.net/"
      );

      // create database
      const db = client.db("cozyember");
      // holds multiple meetup documents
      const storeCartCollection = db.collection("cart");

      if (data.replace) {
        await storeCartCollection.updateOne(
          { _id: new ObjectId(data.replace.id) },
          { $set: { quantity: data.replace.quantity + data.quantity } },
          { upsert: false }
        );
      } else {
        // insert one new document object
        await storeCartCollection.insertOne({
          name: data.name,
          price: data.price,
          quantity: data.quantity,
        });
      }

      // close db
      client.close();

      // return response
      res.status(201).json({ message: "Data added to cart!" });
    } catch (error) {
      throw Error("Unable to update database");
    }
  }
}
