const fs = require("fs");
// const index = fs.readFileSync('index.html','utf-8');

const model = require("../model/product.js");
const Product = model.Product;

// ye CREATE h Mongoose ke liye !!
exports.createProduct = (req, res) => {
  // Proper API h h ye ab :-
  const product = new Product(req.body);  // only create me new use hota h !!

  product
    .save()
    .then((doc) => {
      //   console.log(doc);
      res.status(201).json(doc);
    })
    .catch((err) => {
      //   console.log(err);
      res.status(400).json(err);
    });
  //   res.status(201).json();
};

exports.getAllProducts = async(req, res) => {
  const products = await Product.find();
  res.json(products);
};
exports.getProduct = async(req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async(req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true});
    res.json(doc);
  }
  catch(err){
    res.status(400).json(err);
  }
};
exports.updateProduct = async(req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true});
      res.json(doc);
    }
    catch(err){
      res.status(400).json(err);
    }
};
exports.deleteProduct = async(req, res) => {
    const id = req.params.id;
    try{
      const doc = await Product.findOneAndDelete({_id:id});
      res.json(doc);
    }
    catch(err){
      res.status(400).json(err);
    }
};











// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;

/* 
    Erorr :
    //   product.save((err, doc) => {
    //     console.log({ err, doc });
    //   });


    Problem : 

    D:\projects\Learning_Backend\node_modules\mongoose\lib\model.js:499
    throw new MongooseError('Model.prototype.save() no longer accepts a callback');


    -->The error message you provided indicates that there is an issue with the code in the file model.js in the mongoose module of your project. Specifically, it seems that the save() method of the Mongoose model no longer accepts a callback function.
        so, for this use promises
    
    
    Solution : 

    product.save()
    .then(doc =>{
        console.log(doc);
    })
    .catch(error =>{
        console.log("Error");
    })




*/
