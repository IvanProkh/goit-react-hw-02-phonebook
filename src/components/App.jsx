import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

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

    console.log(name.value, number.value);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Formik initialValues={initialValues}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit}>
          <label htmlFor="">Name</label>
          <Field
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
          <Field
            type="number"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Add contact</button>
        </Form>
        <h2>Contacts</h2>
        <ul>
          <li>contact</li>
        </ul>
      </Formik>
    );
  }
}

export default App;
