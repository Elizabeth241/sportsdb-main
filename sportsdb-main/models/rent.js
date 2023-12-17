
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
name:String,
  email:String,
  phone:String,
   message:String,
   category:String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Rent = mongoose.model('Rent', postSchema);
export default Rent;
