import React from "react"

function Comments({ comments, commentsView, setCommentsView }) {

    console.log(commentsView)

    // function handleShowComments() {
    //     setCommentsView(false)
    // }
    // function handleHideComments() {
    //     setCommentsView(true)
    // }
    const commentsSection = comments.map((comment) => {
        return (
            <>
                <h3>{comment.user} hi</h3>
                <h4>{comment.comment}</h4>
            </>
        )
    })
    return (
        <div>
         {commentsView ? (
          <button onClick={() => setCommentsView(true)}>Show Comments</button>
        ) : (
          <button onClick={() => setCommentsView(false)}>Hide Comments</button>
        )}
            <h2>{comments.length} Comments</h2>
            {commentsSection}
        </div>
    )
}

export default Comments