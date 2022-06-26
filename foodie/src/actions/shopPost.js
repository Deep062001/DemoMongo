import * as api from '../api/index';

export const getShopPost =() => async(dispatch) =>{
    try {
        const {data} = await api.fetchShopPosts();
        dispatch({type :'FETCH_ALL', payload : data})
    } catch (error) {
        console.log(error);
    }
}
export const createShopPost = (shopPost) =>async(dispatch) => {
    try {
        const {data} = await api.createShopPost(shopPost);
        dispatch({type :'CREATE', payload : data})
        
    } catch (error) {
        console.log(error);
    }
}
export const likeShopPost = (id) =>async(dispatch) => {
    try {
        const {data} = await api.likeShopPost(id);
        dispatch({type :'UPDATE', payload : data})
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteShopPost = (id) =>async(dispatch) => {
    try {
        await api.deleteShopPost(id);
        dispatch({type :'DELETE', payload : id})
        
    } catch (error) {
        console.log(error);
    }
}
export const dislikeShopPost = (id) =>async(dispatch) => {
    try {
        const {data} = await api.dislikeShopPost(id);
        dispatch({type :'UPDATE', payload : data})
        
    } catch (error) {
        console.log(error);
    }
}