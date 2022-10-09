import React, { useState } from "react";


function Commentlikes() {
    const [likes, setLikes] = useState(0)
    const [disLikes, setDisLikes] = useState(0)
    return ( 
        <>
            <button key = "likecomment" onClick={() => setLikes(likes + 1)}>{likes}</button>
            <button key= "disLikescomment" onClick={() => setDisLikes(disLikes + 1)}>{disLikes}</button>
        </>

)
    
}

export default Commentlikes