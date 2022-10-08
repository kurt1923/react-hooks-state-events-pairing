import React from "react"
import Incvotes from "./Incvotes"

function Comments({ comments, commentsView, setCommentsView }) {

    console.log(commentsView)


    function handleShowComments() {
        setCommentsView(false)
    }
    function handleHideComments() {
        setCommentsView(true)
    }
    const commentsSection = comments.map((comment) => {
        return (
            <>
                <h3>{comment.user} hi</h3>
                <h4>{comment.comment}</h4>
                <button Incvotes></button>
            </>
        )
    })
    return (
        <div>
            {commentsView ? (
                <button onClick={handleShowComments}>Show Comments</button>
            ) : (
                <button onClick={handleHideComments}>Hide Comments</button>
            )}
            <h2>{comments.length} Comments</h2>

            {commentsView ? null : commentsSection}
        </div>
    )
}

export default Comments