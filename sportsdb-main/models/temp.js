
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
name:String,
 title:String,
description:String,
image:String,
category:String,
video:String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Temp = mongoose.model('Temp', postSchema);
export default Temp;
