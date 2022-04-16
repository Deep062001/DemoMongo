import ShopMessage from "../models/shopMessage.js";
import mongoose from "mongoose";

export const getShopPost =async(req,res) =>{
   try {
       const shopMessages = await ShopMessage.find();
       res.status(200).json(shopMessages);
       
   } catch (error) {
    res.status(404).json({message: error.message});
   }
}


export const createShopPost = async (req,res) =>{
    const post = req.body;
    const newPost = new ShopMessage(post);
    try {
     await newPost.save();
     res.status(201).json(newPost);
   
 } catch (error) {
    res.status(409).json({message: error.message});
 }
}


export const deleteShopPost = async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await ShopMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
    
}


export const likeShopPost = async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const shopPost = await ShopMessage.findById(id);
    const updateShopPost =  await ShopMessage.findByIdAndUpdate(id, { likeCount: shopPost.likeCount + 1 }, { new: true });
    res.json(updateShopPost);
}


export const dislikeShopPost = async(req,res) =>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const shopPost = await ShopMessage.findById(id);
    const updateShopPost =  await ShopMessage.findByIdAndUpdate(id, { dislikeCount: shopPost.dislikeCount + 1 }, { new: true });
    res.json(updateShopPost);
}