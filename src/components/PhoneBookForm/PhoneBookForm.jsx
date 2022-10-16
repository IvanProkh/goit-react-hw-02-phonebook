import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const Error = styled(ErrorMessage)`
  color: red;
  padding: 0;
  margin: 0;
  height: 20px;
`;

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(10).max(13).required(),
});

// const initialValues = { name: '', number: '' };

const nameId = nanoid();
console.log('~ nameId', nameId);
const contactId = nanoid();
console.log('~ contactId', contactId);

// console.log(this.props);

class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log('values', values);
    console.log('name', values.name);

    resetForm();
    this.props.onSubmit(values.name, values.number);
  };

  render() {
    return (
      <Formik
        initialValues={this.state}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <label htmlFor="nameId">Name</label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={nameId}
            placeholder="Name"
            required
          />
          <Error name="name" component="div" />
          <br />
          <label htmlFor="contactId">Number</label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={contactId}
            placeholder="+38 (999) 999 99 99"
            required
          />
          <Error name="number" component="div" />
          <br />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

PhoneBookForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default PhoneBookForm;
