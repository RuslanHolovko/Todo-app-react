import React, { Component } from 'react';
import shortid from 'shortid';

export default class Todoform extends React.Component{

	state ={
		text: ''
	}

	 handleChange = (e) => {
	 	this.setState({
	 		[e.target.name]: e.target.value
	 	})
	}

	handleSubmit = (e) =>{
		e.preventDefault();

		if(this.state.text !== ''){

			this.props.onSubmit({
				id: shortid.generate(),
				text: this.state.text,
				complete: false
			});
			this.setState({
				text: ''
			});
			
		}else{
			alert('enter text please!');
		}

	}

	render() {
		return (

			<div className="form-wrap">
				<form onSubmit={this.handleSubmit} className="todoform">
					<input 
						type="text"
						name="text"
						autoComplete="off"
						placeholder="enter task"
						className='todoform__field'
						value={this.state.text}
						onChange={this.handleChange} />
						<button className="todoform__btn" onClick={this.handleSubmit}>add</button>
				</form>
			</div>

		)
	}

}