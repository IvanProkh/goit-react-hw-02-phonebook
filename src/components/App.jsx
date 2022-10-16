import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './App.styled';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
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
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  currentContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  handleChangeFilter = e => {
    console.log(e.currentTarget.value);
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { addContact, handleChangeFilter, currentContacts, deleteContact } =
      this;
    const { filter } = this.state;

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={handleChangeFilter} />
        <ContactList items={currentContacts()} deleteContact={deleteContact} />
      </Box>
    );
  }
}

export default App;
