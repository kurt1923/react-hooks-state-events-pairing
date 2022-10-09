import React, { useState } from "react"
import Commentlikes from "./Commentlikes"


function Comments({ comments }) {
    console.log(comments)

    const [commentsView, setCommentsView] = useState(false)

    const commentsSection = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <h3>{comment.user} hi</h3>
                <h4>{comment.comment}</h4>
                <Commentlikes commentsKey= {comment.id}/>
            </div>
        )
    })
    return (
        <div>
            {commentsView ? (
                <button key = "show" onClick={() => setCommentsView(false)}>Show Comments</button>
            ) : (
                <button key= "hide" onClick={() => setCommentsView(true)}>Hide Comments</button>
            )}
            <h2>{comments.length} Comments</h2>

            {commentsView ? null : commentsSection}
        </div>
    )
}

export default Comments