import * as api from '../api/index';

export const getFoodPost =() => async(dispatch) =>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type :'FETCH_ALL', payload : data})
    } catch (error) {
        console.log(error.message);
    }
}

export const getFoodPostbyShopID =(shopID) => async(dispatch) =>{
    try {
        const {data} = await api.fetchPostsbyShopID(shopID);
        dispatch({type :'FETCH_BY_SHOP', payload : data})
    } catch (error) {
        console.log(error.message);
    }
}


export const createFoodPost = (foodPost) =>async(dispatch) => {
    try {
        const {data} = await api.createPost(foodPost);
        dispatch({type :'CREATE', payload : data})
        
    } catch (error) {
        console.log(error.message);
    }
}


export const likeFoodPost = (id) =>async(dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({type :'UPDATE', payload : data})
        
    } catch (error) {
        console.log(error.message);
    }
}


export const deleteFoodPost = (id) =>async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type :'DELETE', payload : id})
        
    } catch (error) {
        console.log(error.message);
    }
}


export const dislikeFoodPost = (id) =>async(dispatch) => {
    try {
        const {data} = await api.dislikePost(id);
        dispatch({type :'UPDATE', payload : data})
        
    } catch (error) {
        console.log(error.message);
    }
}