// src/components/UserForm.js
import React from 'react';
import { Formik, Form, Field ,ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required')
  
});

const UserForm = ({ onSubmit }) => {
  return (
    <div className='form'>
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
       
        <button type="submit">Create User</button>
      </Form>
    </Formik>
    </div>
  );
};

export default UserForm;
