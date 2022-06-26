import axios from 'axios';

// for foods
const url = 'http://localhost:5000/food';
export const fetchPosts = () => axios.get(url);
export const fetchPostsbyShopID = (shopID) => axios.get(`${url}/${shopID}/foodItems`);
export const createPost = (newFoodPost) => axios.post(url,newFoodPost);
export const likePost = (id) =>  axios.patch(`${url}/${id}/likePost`);
export const dislikePost = (id) =>  axios.patch(`${url}/${id}/dislikePost`);
export const deletePost = (id) => axios.delete(`${url}/${id}`);


// for shops 
const urlShops = 'http://localhost:5000/shops';
export const fetchShopPosts = () => axios.get(urlShops);
export const createShopPost = (newShopPost) => axios.post(urlShops,newShopPost);
export const likeShopPost = (id) =>  axios.patch(`${urlShops}/${id}/likePost`);
export const dislikeShopPost = (id) =>  axios.patch(`${urlShops}/${id}/dislikePost`);
export const deleteShopPost = (id) => axios.delete(`${urlShops}/${id}`);