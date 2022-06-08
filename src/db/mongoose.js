const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/docker-node-mongo", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`Mongo Connected`);
  })
  .catch((err) => console.error(err));

const Coin = mongoose.model("Cat", { name: String });

const kitty = new Coin({ name: "b2" });
kitty.save().then(() => console.log(kitty));
