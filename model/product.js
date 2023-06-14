const mongoose = require('mongoose');
const {Schema} = mongoose;


// //db connection
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');
//   console.log("database connected")
// }


// Schema 
const productSchema = new Schema({
    title: {type:String,required : true , unique:true},
    description: String,
    price: Number,
    discountPercentage: {type:Number,min:[0,'wrong min disconunt'],max:[50,'wrong max discount']},
    rating: {type:Number,min:[0,'wrong min rating'],max:[5,'wrong max rating']},
    brand: {type :String , required : true},
    category: {type :String , required : true},
    thumbnail:{type :String , required : true},
    images:[String]
  });

exports.Product = mongoose.model('Product', productSchema);

