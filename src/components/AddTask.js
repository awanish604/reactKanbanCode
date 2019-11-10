import React from 'react'

const AddTask =(props)=>{
    return (
        
                <div className="p-2 m-2 text-center">
                    <button className="btn btn-danger m-2 btn-sm"
                    onClick={()=>{props.deleteActivity(props.id)}}
                    >Delete</button>
                    <button className="btn btn-primary btn-sm" onClick={props.addActivity}>Add Task</button>
                </div>
            
    )
}

export default AddTask