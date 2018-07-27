import React from 'react'

let JobDetails = (props) => {
    return (
        <section id="job-details">
            <h2>Job Details</h2>
            <h4>{props.list.title}</h4>
            <p>{props.list.description}</p>
        </section>
    )
}
export default JobDetails



