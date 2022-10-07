import React from "react"


function Views({viewcount, uploaded }) {
    const h5 = `${viewcount} Views | Uploaded ${uploaded}`
    
   return <h5>{h5}</h5>
}

export default Views