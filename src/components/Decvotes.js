import React from "react";

function Decvotes({ onSetDownVote, downVote }) {
    return (<button
        onClick={() => onSetDownVote(downVote + 1)}
    >
        {downVote}
    </button>
    )
}

export default Decvotes