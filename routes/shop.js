import express from "express";
import { getShopPost , createShopPost, likeShopPost, dislikeShopPost , deleteShopPost} from "../controllers/ShopPost.js";
const router = express.Router();

router.get('/' , getShopPost );
router.post('/' , createShopPost );
router.patch('/:id/likePost' , likeShopPost);
router.patch('/:id/dislikePost' , dislikeShopPost);
router.delete('/:id' , deleteShopPost);


export default router;