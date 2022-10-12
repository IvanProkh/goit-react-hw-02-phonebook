import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// import { Formik, Form, Field } from 'formik';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleNumberChange = e => {
    this.setState({
      number: e.currentTarget.number,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    this.setState({
      contacts: this.state.contacts.reduce.reduce(function (name, number) {
        return { name, number };
      }, []),
    });

    console.log(name.value, number.value);
    console.log(this.state.contacts);

    this.reset();
  };

  // chandleSubmit = (values, ({resetForm})) => {
  //   // e.preventDefault();

  //   const { name, number } = e.target.elements;

  //   console.log(name.value, number.value);

  //   // this.reset();
  // resetForm()
  // };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    //     const initialValues = {
    //       name: '',
    //       number: '',
    //     };
    // initialValues = { initialValues };
    return (
      <div>
        <h1>Phonebook</h1>
        <PhoneBookForm />
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            id={nanoid()}
            required
          />

          <label htmlFor="">Number</label>
          <input
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Add contact</button>
        </form> */}
        <h2>Contacts</h2>
        <ul>
          <li>contact</li>
        </ul>
      </div>
    );
  }
}

export default App;
