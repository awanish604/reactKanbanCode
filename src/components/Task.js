import React from 'react'

const Task = (props)=>{

    const {taskText, listNumber,timeId} = props

    return(
        <div className="card bg-light mb-2 p-2">
            <div className="card-content">
                <div className="card-text">
                   
                    {taskText}

                </div>
            </div>
        </div>
    )


}

export default Task