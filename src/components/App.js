import video from "../data/video.js";
import Views from "./Views"
import Incvotes from "./Incvotes"
import Comments from "./Comments"
import React, { useState } from "react";
import Decvotes from "./Decvotes";

function App() {
  console.log("Here's your data:", video.views)

  const [upVote, setUpVote] = useState(video.upvotes)
  const [downVote, setDownVote] = useState(video.downvotes)
  

  // function toggleComments() {
  //   setCommentsView(!commentsView)
  // }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>React Today and Tomorrow and 90% Cleaner React With Hooks</h1>
      <Views viewcount={video.views} uploaded={video.createdAt} />
      <Incvotes upVote={upVote} onSetUpVote={setUpVote} />
      <Decvotes downVote={downVote} onSetDownVote={setDownVote} />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
