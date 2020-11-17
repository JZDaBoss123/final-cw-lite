import React, { useState } from "react";
import axios from "axios";

const Posts = (props) => {
  const { item } = props;
  const { q, ans, writer, _id } = item;
  const [answer, setAns] = useState("")

  const answerino = async () => {
    try {
      await axios.post("/api/questions/answer", { _id, answer });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <p>
        Question: {q}, Written By: {writer}
      </p>
      <ul>
        <li>Answer: {ans}</li>
        <li>
            Reply:
            <input onChange={(e) => setAns(e.target.value)} />
            <button onClick={() => answerino()}> Submit </button>
        </li>
      </ul>
    </>
  );
};

export default Posts;
