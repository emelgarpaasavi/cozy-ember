// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient, ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
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

    await storeCartCollection.deleteOne(
        { _id: new ObjectId(data.id) }
    );

      // close db
      client.close();

      // return response
      res.status(201).json({ message: "Data deleted to cart!" });
    } catch (error) {
      throw Error("Unable to update database");
    }
  }
}
