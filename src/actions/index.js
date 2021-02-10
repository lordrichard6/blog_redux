import jsonplaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   return async function (dispatch) {
//     const response = await jsonplaceholder.get("/posts");

//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
