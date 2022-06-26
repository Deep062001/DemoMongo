// eslint-disable-next-line import/no-anonymous-default-export
export default (shopPosts = [], action) => {
    switch (action.type) {
      case 'FETCH_ALL':
        return action.payload;
      case 'CREATE':
          return [...shopPosts,action.payload];
      case 'UPDATE':
            return shopPosts.map((shopPost) => (shopPost._id === action.payload._id ? action.payload : shopPost));
      case 'DELETE':
         return shopPosts.filter((shopPost) => (shopPost._id !== action.payload));
      default:
        return shopPosts;
    }
};