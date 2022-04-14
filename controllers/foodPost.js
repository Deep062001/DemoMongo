import FoodMessage from "../models/foodMessage.js";
export const getFoodPost =async(req,res) =>{
   try {
       const foodMessages = await FoodMessage.find();
       res.status(200).json(foodMessages);
       
   } catch (error) {
    res.status(404).json({message: error.message});
   }
}
export const createFoodPost = async(req,res) =>{
    const post = req.body;
    const newPost = new FoodMessage(post);
    try {
     await newPost.save();
     res.status(201).json(newPost);
   
 } catch (error) {
    res.status(409).json({message: error.message});
 }
}