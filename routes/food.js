import express from "express";
import { getFoodPost , createFoodPost} from "../controllers/foodPost.js";
const router = express.Router();

router.get('/' , getFoodPost );
router.post('/' , createFoodPost );
export default router;