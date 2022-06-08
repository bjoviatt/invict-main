const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";

async function addOne(req, res, next) {
  const reqInfo = req.query.name;
  console.log(reqInfo);
  const client = new MongoClient(uri);
  await client
    .connect()
    .then(() => {
      console.log(`Connected`);
    })
    .then(() => {
      const dbRef = client.db("main");
      const collection = dbRef.collection("stuff");
      collection
        .insertOne({ name: reqInfo })
        .then((data) => console.log(`Added`))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));

  next();
}
async function getInfo(req, res, next) {
  const client = new MongoClient(uri);
  await client
    .connect()
    .then(() => {
      console.log(`Connected`);
    })
    .then(async () => {
      const dbRef = client.db("main");
      const collection = dbRef.collection("stuff");
      const cursor = collection.find({ name: "b" });
      const allValues = await cursor.toArray();
      req.allVal = allValues;
    })
    .catch((err) => console.error(err));

  next();
}

module.exports = { addOne, getInfo };
