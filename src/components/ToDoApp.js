import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddToDo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { withRouter } from "react-router";
class ToDoApp extends Component {

    render() {
        return (
            <div className="page-todos">
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}
export default withRouter(ToDoApp)