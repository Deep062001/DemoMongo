import mongoose from "mongoose";

const foodSchema = mongoose.Schema({
    shop_id: String,
    name: String,
    price : String,
    creator: String,
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
const FoodMessage = mongoose.model('FoodMessage' , foodSchema);
export default FoodMessage;