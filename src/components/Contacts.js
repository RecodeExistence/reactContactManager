import React, { Component } from 'react';
import Contact from './Contact';


class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1, 
                name: 'John Doe', 
                email: 'johndoe@gmail.com', 
                phone: '555-555-555'
            }, 

            {
               id: 2, 
               name: 'Jane Doe', 
               email: 'janedoe@gmail.com', 
               phone: '666-666-666'
           }, 

           {
               id: 3, 
               name: 'Jeremy Doe', 
               email: 'jeremydoe@gmail.com', 
               phone: '777-777-777'
                }
            ]
        };
    

    render() {
        const { contacts } = this.state;

        return (
            <React.Fragment>
            {contacts.map(contact => (
                <Contact    // setting props to the contact component, accessible within that component file.  
                    key = {contact.id}
                    contact = {contact}
                />
            ))}
            </React.Fragment>
            
            
        );
    }
    
}

export default Contacts;