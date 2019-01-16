import React, { Component } from 'react';
import Todoform from './Todoform'
import Todo from './Todo'

export default class Todolist extends React.Component{

	state = {
		todos: [],
		todoToShow: 'all'
	};

	addTodo = todo => {
		this.setState({
			todos: [todo, ...this.state.todos]
		});
	};

	onComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id) {
					return {
						...todo,
						complete: !todo.complete
					};

				}else{
					return todo;
				}
			})
		})
	};

	updateTodoToShow = (s) => {
		this.setState({
			todoToShow: s
		})
	}

	handleDeleteTodo = id => {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		})
	}


	render() {

		// let todos = [];

		// if(this.state.todoToShow === 'all'){
		// 	todos = this.state.todos;
		// }else if (this.state.todoToShow === 'active'){
		// 	todos = this.state.todos.filter(todo => !todo.complete);
		// }else if (this.state.todoToShow === 'complete'){
		// 	todos = this.state.todos.filter(todo => todo.complete);
		// }

		return(
			<div className='todo'>
				<Todoform onSubmit={this.addTodo} />
				<ul className='list'>
					{/*{todos.map(todo =>(*/}
					{this.state.todos.map(todo =>(
						<Todo 
							key={todo.id} 
							onComplete={() => this.onComplete(todo.id)}
							onDelete={() => this.handleDeleteTodo(todo.id)}
							todo={todo}
						/>
					))}
				</ul>
				{/*<div>todos left {this.state.todos.filter(todo => !todo.complete).length}</div>*/}
				{/*<button onClick={() => this.updateTodoToShow('all')} >All</button>*/}
				{/*<button onClick={() => this.updateTodoToShow('active')} >Active</button>*/}
				{/*<button onClick={() => this.updateTodoToShow('complete')} >Complete</button>*/}
			</div>
		) 
	}

}