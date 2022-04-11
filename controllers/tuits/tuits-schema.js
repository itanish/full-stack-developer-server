import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   _id: Number,
                                   tuit: String,
                                   likes: Number,
                                   postedBy: {
                                       username: String
                                   },
                                   dislikes: Number,
                                   liked: Boolean,
                                   handle: String,
                                   time: String,
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
