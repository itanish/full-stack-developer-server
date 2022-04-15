import mongoose from 'mongoose';

const schema = mongoose.Schema({
                                   _id: Number,
                                   topic:String,
                                   tuit: String,
                                   likes: Number,
                                   postedBy: {
                                       username: String
                                   },
                                   dislikes: Number,
                                   liked: Boolean,
                                   handle: String,
                                   time: String,
                                   title:String,
                                   'logo-image': String,
                                   'avatar-image': String,
                                   tuits: String,
                                   stats: {
                                       comments: Number,
                                       retuits: Number,
                                       likes: Number
                                   }
                               }, {collection: 'allTuits'});
export default schema;
