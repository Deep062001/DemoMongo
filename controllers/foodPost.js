import FoodMessage from "../models/foodMessage.js";
import mongoose from "mongoose";


export const getFoodPost =async(req,res) =>{
   try {
       const foodMessages = await FoodMessage.find();
       console.log("I reached Food Posts");
       res.status(200).json(foodMessages);
       
   } catch (error) {
    res.status(404).json({message: error.message});
   }
}

export const getFoodPostbyShopID =async(req,res) =>{
    const {shopID} = req.params;
    try {
        const foodMessages = await FoodMessage.find({shop_id:shopID});
        //console.log(foodMessages);
        console.log("I reached Food Posts using ShopID");
        res.status(200).json(foodMessages);
        
    } catch (error) {
     res.status(404).json({message: error.message});
    }
 }


export const createFoodPost = async (req,res) =>{
    const post = req.body;
    const newPost = new FoodMessage(post);
    try {
     await newPost.save();
     res.status(201).json(newPost);
   
 } catch (error) {
    res.status(409).json({message: error.message});
 }
}


export const deleteFoodPost = async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await FoodMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
    
}


export const likeFoodPost = async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const foodPost = await FoodMessage.findById(id);
    const updateFoodPost =  await FoodMessage.findByIdAndUpdate(id, { likeCount: foodPost.likeCount + 1 }, { new: true });
    res.json(updateFoodPost);
}



export const dislikeFoodPost = async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const foodPost = await FoodMessage.findById(id);
    const updateFoodPost =  await FoodMessage.findByIdAndUpdate(id, { dislikeCount: foodPost.dislikeCount + 1 }, { new: true });
    res.json(updateFoodPost);
}