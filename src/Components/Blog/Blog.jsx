import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h3>a. When should you use context API?</h3>
      <h5>
        Ans: Context API should be used when you need to pass data to multiple
        components without manually passing props through each intermediate
        component.
      </h5>
      <h3>b. What is a custom hook?</h3>
      <h5>
        Ans: A custom hook is a reusable function in React that allows you to
        extract and share component logic across different components.
      </h5>
      <h3>c. What is useRef?</h3>
      <h5>
        Ans: useRef is a built-in hook in React that provides a mutable object
        with a "current" property. It allows you to persist values across
        component renders and is commonly used to reference DOM elements or
        store mutable values.
      </h5>
      <h3>d. What is useMemo?</h3>
      <h5>
        Ans: useMemo is a built-in hook in React that memoizes the result of a
        function and returns the cached result when the dependencies haven't
        changed. It helps optimize performance by avoiding unnecessary
        calculations or expensive computations.
      </h5>
    </div>
  );
};

export default Blog;
