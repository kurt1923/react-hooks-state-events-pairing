import React from "react"

function Incvotes({ onSetUpVote, upVote }) {
    return (<button
        onClick={() => onSetUpVote(upVote + 1)}
    >
        {upVote}
    </button>
    )
}

export default Incvotes