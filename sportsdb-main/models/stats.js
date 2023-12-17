
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  
   playername:String,
   year:String,
   goals:String,
    assist:String,
   red:String,
   yellow:String,
  team:String,
  player_id:String,
    createdAt: {
    type: Date,
    default: new Date(),
    },
})
var Chart = mongoose.model('Chart', postSchema);
export default Chart;
