import React, { useState } from "react";

const PostsView = (props) => {
  const { item } = props;
  const { q, ans, writer } = item;

  return (
    <>

        <p>Question: {q}, Written By: {writer}</p>
        <ul>
            <li>Answer: {ans}</li>
        </ul>

    </>
  );
};

export default PostsView;
