
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
title: String,
description: String,
time: String,
date:String,
likes: [String],
landlord:String,
landlord_id: String,
comments: [String],
image: String,
video: String,
category:String,
image:"",

createdAt: {
type: Date,
default: new Date(),
},
})
var PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;
