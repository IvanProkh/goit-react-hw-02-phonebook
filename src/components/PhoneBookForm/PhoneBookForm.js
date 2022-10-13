import React from 'react';

import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(10).max(13).required(),
});

// await schema.isValid(10);

const initialValues = { name: '', number: '' };

// {resetForm}

const PhoneBookForm = (Submit, props) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);

    Submit();
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="">Name</label>
        <Field
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // value={props.state.name}
          // onChange={handleChange}
          id={nanoid()}
          placeholder="Name"
          required
        />
        <ErrorMessage name="name" component="div" />
        <br />
        <label htmlFor="">Number</label>
        <Field
          type="tel"
          name="number"
          pattern="[0-9]"
          title="Enter phone number in the format +38 (999) 999 99 99"
          // value={props.state.number}
          // onChange={handleChange}

          id={nanoid()}
          placeholder="+38 (999) 999 99 99"
          required
        />
        <ErrorMessage name="number" component="div" />
        <br />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default PhoneBookForm;
