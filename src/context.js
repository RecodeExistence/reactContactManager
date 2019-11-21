import React, { Component } from 'react';

const Context = React.createContext(); 

export class Provider extends Component {
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
            
    }

   render() {
       return (
           <Context.Provider value = {this.state}>
                {this.props.children}
           </Context.Provider>
       );
   }
}

export const Consumer = Context.Consumer;