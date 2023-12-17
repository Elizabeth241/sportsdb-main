
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    name:String,
    age:String,
    description:String,
    title:String,
    nationality:String,
    role:String,
    image:String,
    video:String,
    position:String,
    gessynumber:String,
    role:String,
    department:String,
    indexnumber:String,
    telephone:String,
    team:String,
    year:String,
   active:String,


    createdAt: {
    type: Date,
    default: new Date(),
    },
 
})
var Players = mongoose.model('Players', postSchema);
export default Players;
