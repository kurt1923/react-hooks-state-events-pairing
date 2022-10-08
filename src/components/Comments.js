import React, { useState } from "react"


function Comments({ comments }) {
console.log(comments)
const [likes, setLikes] = useState(0)
const [disLikes, setDisLikes] = useState(0)
const [commentsView, setCommentsView] = useState(false)

    const commentsSection = comments.map((comment) => {
        return (
            <>
                <h3>{comment.user} hi</h3>
                <h4>{comment.comment}</h4>
                <button onClick={()=>setLikes(likes+1)}>{likes}</button>
                <button onClick={()=>setDisLikes(disLikes+1)}>{disLikes}</button>
            </>
        )
    })
    return (
        <div>
            {commentsView ? (
                <button onClick={()=> setCommentsView(false)}>Show Comments</button>
            ) : (
                <button onClick={()=> setCommentsView(true)}>Hide Comments</button>
            )}
            <h2>{comments.length} Comments</h2>

            {commentsView ? null : commentsSection}
        </div>
    )
}

export default Comments