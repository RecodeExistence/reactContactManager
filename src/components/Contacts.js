import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context'//Import Consumer.  


class Contacts extends Component {
    
    
        deleteContact = (id) => {
            const { contacts } = this.state; 
            const updatedContacts = contacts.filter((contact) => contact.id !== id);
            this.setState({
                contacts: updatedContacts
            });
        }

    render() {
        return (
            <Consumer>
            {value => { 
                const { contacts } = value; 
                return (
                    <React.Fragment>
            {contacts.map(contact => (
                <Contact    // setting props to the contact component, accessible within that component file.  
                    key = {contact.id}
                    contact = {contact}
                    deleteClickHandler = {this.deleteContact.bind(this, contact.id)}
                />
            ))}
            </React.Fragment>
                )
            }}
            </Consumer>
        )



    }
    
}
 
export default Contacts;