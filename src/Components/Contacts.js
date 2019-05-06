import React, {Component} from 'react';
import Contact from './Contact';
import AddContact from './AddContact';


class Contacts extends React.Component {

	constructor() {
		super();
		this.state = {
			contacts: [],
			
		}
	}

	addNewContact(newContact){
		this.setState(prevState => {
			return{
				contacts: prevState.contacts.concat(newContact)
			}
		})
	}

	deleteContact(id){
		let filtered = this.state.contacts.filter(el => {
			return el.id !== id
		})
		this.setState({
			contacts: filtered
		})
	}

	render() {
		return (
			<div className="Contacts">
			<AddContact addNewContact={this.addNewContact.bind(this)} />
				{this.state.contacts.map((element,index)=>{
						return(
								<Contact delContact={this.deleteContact.bind(this,element.id)}  key={element.id} id={element.id} name={element.name} email={element.email} phone={element.phone}  />
							)
					})
				}
			</div>
		);
	}
}
export default Contacts;