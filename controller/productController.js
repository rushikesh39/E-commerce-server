
const Cart = require("../models/cartModels");
const Product=require("../models/productModels")

async function insert_Cart_details(req, res) {
  try {
    const details = req.body;

    // Check if the cart already exists for the given email and id
    const existingCart = await Cart.findOne({ "email": details.email, "id": details.id });
    console.log("already exist", existingCart);

    if (existingCart) {
      // If the cart exists, update the order_count by 1
      const updatedCart = await Cart.updateOne(
        { "email": details.email, "id": details.id },
        { $inc: { "order_count": 1 } }
      );
      console.log("updated", updatedCart);
      return res.send("cart updated")
    } else {
      // If the cart doesn't exist, create a new one
      console.log("cart details", details);
      const insertedCart = await Cart.create(details);
      console.log("data inserted", insertedCart);
     return res.send({ "data inserted": insertedCart });
    }
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send({ "error": e.message });
  }
}

async function find_Cart_details(req, res) {
  try {
    const details=req.body;
    console.log("cart details",details)
    const result=await Cart.find({"email":details.email})
    res.send({"data ":result})
  } catch (e) {
    res.send("error",e);
  }
}
async function home(req, res) {
  try {
    const mobile = await Product.find({"product_category_tree":"mobile"}).limit(10);
    const laptop = await Product.find({"product_category_tree":"laptop"}).limit(5);
    const jewellary = await Product.find({"product_category_tree": { $regex: new RegExp("Jewellery", 'i')}}).limit(4);
    const watches = await Product.find({"product_category_tree": { $regex: new RegExp("Watches", 'i')}}).limit(4);
    res.send({mobile:mobile,laptop:laptop,jewellary:jewellary,watches });
  } catch (e) {
    res.send("error");
  }
}
async function mobile(req, res) {
  try {
    const result = await Product.find({"product_category_tree":"mobile"}).limit(100);
    res.send({ products: result });
  } catch (e) {
    res.send("error");
  }
}
async function computer(req, res) {
  try {
    const result = await Product.find({"product_category_tree": { $regex: new RegExp("laptop", 'i')}}).limit(80).skip(7);
    res.send({ products: result });
  } catch (e) {
    res.send("error");
  }
}
async function jewellary(req, res) {
  try {
    const result = await Product.find({"product_category_tree": { $regex: new RegExp("Jewellery", 'i')}}).limit(80);
    res.send({ products: result });
  } catch (e) {
    res.send("error");
  }
}
async function fashion(req, res) {
  try {
    const result = await Product.find({"product_category_tree": { $regex: new RegExp("Clothing", 'i')}}).limit(80);
    res.send({ products: result });
  } catch (e) {
    res.send("error");
  }
}
async function footwear(req, res) {
  try {
    const result = await Product.find({"product_category_tree": { $regex: new RegExp("Footwear", 'i')}});
    res.send({ products: result });
  } catch (e) {
    res.send("error");
  }
}
async function watches(req, res) {
  try {
    const result = await Product.find({"product_category_tree": { $regex: new RegExp("Watches", 'i')}});
    res.send({ products: result });
  } catch (e) {
    res.send({"error":e});
  }
}
async function search(req, res) {
  try {
    const details=req.body;
    const result = await Product.find({"product_name": { $regex: new RegExp(details, 'i')}});
    res.send({ products: result });
  } catch (e) {
    res.send({"error":e});
  }
}


module.exports = {home,mobile,computer,jewellary,fashion,footwear,watches, insert_Cart_details,find_Cart_details,search };
 