
const Product=require("../models/productModels")

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


module.exports = {home,mobile,computer,jewellary,fashion,footwear,watches };
 