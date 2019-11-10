import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import history from '../history.js'

const AddTaskModal =(props)=>{
    return ReactDOM.createPortal(
        <div >
             <Helmet>
                <style>{'body { background-color: black; }'}</style>
            </Helmet>
            <div className='card bg-light w-50  mx-auto my-5'>
            <div className='card-body'>
                <label className='ml-5'>Task name</label>
                <input className='ml-5 newTaskName'/>
                <button className='btn btn-primary ml-5' onClick={()=>{
                    const newTaskName= document.querySelector('.newTaskName').value
                    console.log(newTaskName)
                    localStorage.setItem('newTaskName', newTaskName)
                    history.push('/')
                
                
                }}>submit</button>
            </div>
           
        </div>
        </div>
        , document.querySelector('#modal')
    )
}

export default AddTaskModal
