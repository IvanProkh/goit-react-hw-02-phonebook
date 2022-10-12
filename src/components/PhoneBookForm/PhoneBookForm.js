import React from 'react';

import { nanoid } from 'nanoid';
// import { Formik, Form, Field } from 'formik';

const PhoneBookForm = () => {
  return (
    <form onSubmit={this.handleSubmit}>
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
    </form>
  );
};

export default PhoneBookForm;
