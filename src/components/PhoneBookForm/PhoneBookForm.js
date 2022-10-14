import React from 'react';
import styled from 'styled-components';

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

const initialValues = { name: '', number: '' };

const PhoneBookForm = props => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);

    resetForm();
    props.onSubmit(values.name, values.number);
  };

  const nameId = nanoid();
  console.log('~ nameId', nameId);
  const contactId = nanoid();
  console.log('~ contactId', contactId);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="nameId">Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // value={props.state.name}
          // onChange={handleChange}
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
          title="Enter phone number in the format +38 (999) 999 99 99"
          // value={props.state.number}
          // onChange={handleChange}

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
};

export default PhoneBookForm;
