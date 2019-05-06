import React, {Component} from 'react';
import uuid from 'uuid';

class AddContact extends React.Component {


	constructor() {
		super();
		this.state = {
			id: undefined,
			name: "",
			email: "",
			phone: "",
			errors: {}
		}
	}

	toggledInput(e){
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
			id: uuid()
		})
	}

	onSub(e){

		e.preventDefault();
		const {name, email, phone} = this.state;

		if(name === ""){
		 	this.setState({
				errors: {name: `name is required !`}
			})
			return;
		}
		if(email === ""){
			 this.setState({
					errors: {email: `email is required !`}
				})
			return;
		}
		if(phone === ""){
			  this.setState({
				errors: {phone: `phone is required !`}
			})
			return;
		}

		this.props.addNewContact(this.state);

		this.setState({
			id: undefined,
			name: "",
			email: "",
			phone: "",
			errors: {}
		})

	}



	render() {
		const {name, email, phone, errors} = this.state;
		return (
			<div className="AddContact">
				<h2>Add Contact</h2>
				<form onSubmit={(e) => this.onSub(e)}>
					<label htmlFor="name">Name</label>
					<br/>
					<input onChange={(e)=> this.toggledInput(e)} type="text" name="name" value={name} className="is-invalid" placeholder="Enter Name..."  />
					<br/>
					{errors.name && <p> {errors.name} </p>}
					<label htmlFor="email">Email</label>
					<br/>
					<input onChange={(e)=> this.toggledInput(e)} type="text" name="email" value={email} placeholder="Enter Email..." />
					<br/>
					{errors.email && <p> {errors.email} </p>}
					<label htmlFor="phone">Phone</label>
					<br/>
					<input onChange={(e)=> this.toggledInput(e)} type="text" name="phone" value={phone} placeholder="Enter Phone..." />
					<br/>
					{errors.phone && <p> {errors.phone} </p>}

					<button>Add</button>
				</form>

			</div>
		);
	}
}
export default AddContact;