import express from "express";
import { getFoodPost , createFoodPost, likeFoodPost, dislikeFoodPost , deleteFoodPost, getFoodPostbyShopID} from "../controllers/foodPost.js";
const router = express.Router();

router.get('/' , getFoodPost );
router.get('/:shopID/foodItems', getFoodPostbyShopID);
router.post('/' , createFoodPost );
router.patch('/:id/likePost' , likeFoodPost);
router.patch('/:id/dislikePost' , dislikeFoodPost);
router.delete('/:id' , deleteFoodPost);
export default router;