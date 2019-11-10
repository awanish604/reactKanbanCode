import React from 'react'

import Task from './Task.js'
import AddTask from './AddTask.js'

class List extends React.Component{
    constructor(props){
        super(props)
    }

    addActivity=()=>{  
    const newTask = {
      taskText:'test' ,
      listNumber: this.props.id,
      timeId: new Date().valueOf()
    }
    this.props.addActivity(newTask)    
    }

    deleteActivity=(id)=>{
        console.log(id)
        this.props.deleteActivity(id)
    }

    
    
    render(){
        const {title,id, cards } = this.props
        const tasks=cards.map(card=>{
        return <Task {...card}/>
         })

        return(
            <div className="col">
            <div className="card mr-n3 border-primary mt-2" style={{maxWidth: '18rem'}}>
                <div className="card-body">
                <div className="card-title"><h3>{title}</h3></div>
                <div className="card-text small">{tasks}</div>
                <AddTask 
                addActivity={this.addActivity} 
                id={id}
                deleteActivity={(id)=>this.deleteActivity(id)}
                   />
                
                </div>   
            </div>
            </div>
        )

    }
    

    
}

export default List