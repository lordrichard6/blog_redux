import jsonPlaceholder from "../apis/jsonPlaceholder";
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

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
