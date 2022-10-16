import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// import { Formik, Form, Field } from 'formik';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    console.log('contact', contact);

    this.setState(({ contacts }) => {
      if (
        contacts.find(
          contact =>
            contact.name.toLowerCase() === name.toLowerCase() ||
            contact.number.toLowerCase() === number.toLowerCase()
        )
      ) {
        return alert(`${name}/${number} is already in contacts!`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
    console.log('contacts', this.state.contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBookForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}:{number}
              <button type="button" onClick={() => this.deleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
