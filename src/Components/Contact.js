import React, {Component} from 'react';
import Contacts from './Contacts';

class Contact extends React.Component {

	constructor() {
		super();
		this.state = {
			show: true
		}
	}

	toggleContact = ()=> {
		this.setState(prevState => {
			return{
				show: !prevState.show
			}
		})
	}

	render() {
		const name = this.props.name;
		const email = this.props.email;
		const phone = this.props.phone;
		return (
			<div className="Contact">
				<h4>{name}  <i onClick={this.toggleContact} className="fas fa-sort-down"></i> 
				<i onClick={this.props.delContact} className="fas fa-times" style={{float: 'right', color: 'red'}} 
				></i></h4>
				{
					this.state.show && 
						<ul>
							<li>Email: {email}</li>
							<li>Phone: {phone}</li>
						</ul>
				}
			</div>
		);
	}
}
export default Contact;