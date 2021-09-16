import axios from "axios";
import React, { useEffect, useReducer } from "react";

const intialstate = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something Happen :(",
        post: {},
      };
    default:
      return state;
  }
};
function FetchDataUseReducer() {
  const [state, dispatch] = useReducer(reducer, intialstate);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        console.warn(res.data)
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        
      })
      .catch((err) => dispatch({ type: "FETCH_ERROR" }));
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchDataUseReducer;
