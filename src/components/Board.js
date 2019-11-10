import React from 'react'
import history from '../history.js'
import List from './List.js'

class Board extends React.Component
{
    constructor(props){
        super(props)
        if(localStorage.getItem('lists')){
            const lists= localStorage.getItem('lists')
            
           const parsedLists=JSON.parse(lists)
           console.log(lists)
            this.state={lists:parsedLists}
        }
        else{
            this.state={
                lists: [
                  {
                    title: 'Awanish',
                    id: 0,
                    cards: [{
                      taskText: 'Wash clothes',
                      listNumber: 0,
                      timeId: 0
                    }, 
                    {
                      taskText: 'play video games',
                      listNumber: 0,
                      timeId: 1
                    }]
                  },
                  {
                    title: 'Deepak',
                    id: 1,
                    cards: [{
                      taskText: 'Read books',
                      listNumber: 1,
                      timeId: 2
                    }, 
                    {
                      taskText: 'Play football',
                      listNumber: 1,
                      timeId: 3
                    }]
                  }
                  
                  
                  

                ]
              }

              //syncing with local storage
              localStorage.setItem("lists", JSON.stringify(this.state.lists))
        }

    }

    addActivity=(newTask)=>{
        
        //const lists= this.state.lists
        //lists[newTask.listNumber].cards.push(newTask)
        
        //this.setState({lists})
        //syncing with local storage
        //localStorage.setItem("lists", JSON.stringify(this.state.lists))
        localStorage.setItem('settingid',JSON.stringify(newTask.listNumber))
        history.push('/addTask')

    }

    deleteActivity=(id)=>{
      console.log(id)
      console.log(this.state.lists[id].cards.length)
      var lists= this.state.lists
      lists[id].cards.pop()
      this.setState({lists:lists})
      localStorage.setItem('lists',JSON.stringify(lists))
    }

    addNewList=()=>{

      console.log('asdfasdfasd')
      const newListName= document.getElementById('addNewList').value
      const newList={
        title:newListName,
        id:this.state.lists.length,
        cards:[]

      }
      console.log(newList)
      var lists= this.state.lists
      lists.push(newList)

      this.setState({lists:lists})
      localStorage.setItem('lists',JSON.stringify(this.state.lists))
    }

    

    render(){

        var lists =this.state.lists
        if(localStorage.getItem('settingid')){

        const idToInsert= JSON.parse(localStorage.getItem('settingid'))
        const valueToChange=localStorage.getItem('newTaskName')
        lists[idToInsert].cards.push({
          
            taskText:valueToChange,
            listNumber: this.props.id,
            timeId: new Date().valueOf()
          
        })

        localStorage.removeItem('settingid')
        localStorage.removeItem('newTaskName')
        
        localStorage.setItem("lists", JSON.stringify(this.state.lists))

        }
        
         lists= this.state.lists.map(list=>{
            return(
                <List {...list} 
                addActivity={(newTask)=>this.addActivity(newTask)}
               deleteActivity={(id)=>this.deleteActivity(id)}
                />
            )
        })

          const addList=  <div className="col mr-n5 mt-2 mb-2"> 
                            <div className="card  border-primary">
                              <div className="card-body">
                                <div className="card-text">
                                    <label className="ml-2">Add new list</label>
                                    <input id="addNewList " className="ml-2 mb-2"/>
                                    <div className="btn small btn-outline-primary ml-2"
                                    onClick={this.addNewList}
                                    >Add List</div>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                   
                
        return(
            <div className='container ml-n1 overflow'>
                <div className="row">
                    {lists}
                    {addList}
                </div>
            </div>


        )
    }
}

export default Board