import React, { Component } from 'react';

export default props => (

	<li
		className='item'
		style={{
			textDecoration: props.todo.complete ? 'line-through' : ""
		}}>

		<input type="checkbox" onChange={props.onComplete}/>
		<span className="item__text">{props.todo.text}</span>
		<button onClick={props.onDelete} className="item__delete"></button>

	</li>

);