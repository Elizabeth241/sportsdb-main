
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name:String,
    age:String,
   description:String,
    title:String,
   nationality:String,
   image:String,
category:String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Coaches = mongoose.model('Coaches', postSchema);
export default Coaches;
