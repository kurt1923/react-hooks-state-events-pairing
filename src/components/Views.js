import React from "react"


function Views({viewcount}) {
    const h5 = viewcount.map((view) => {
    `${view.views} Views | Uploaded ${view.createdAt}`
    })
   return <h5>{h5}</h5>
}

export default Views