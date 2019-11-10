import React from 'react'
import {Route,Router} from 'react-router-dom'
import Board from './Board.js'
import history from '../history.js'
import AddTaskModal from './AddTaskModal.js'
import Header from './Header.js'
 
class App extends React.Component
{
    render(){

        return (
            <Router history={history}>
                <Header/>
                <Route path='/' exact component={Board}/>
                <Route path='/addTask' exact component={AddTaskModal}/>
            </Router>)

         
    }
        
};

export default App