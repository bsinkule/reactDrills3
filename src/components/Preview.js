import React from 'react'

let Preview = (props) => {
    return (
        <div>
            <button onClick={() => props.tog()} id="preview-toggle">Show Preview</button>
            <section id="application-preview" className="hidden"></section> 
        </div> 
    )
}
export default Preview