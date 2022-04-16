import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
    name: String,
    description : String,
    location: String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type: Number,
        default : 0
    },
    dislikeCount : {
        type: Number,
        default : 0
    }
});

const ShopMessage = mongoose.model('ShopMessage' , shopSchema);
export default ShopMessage;