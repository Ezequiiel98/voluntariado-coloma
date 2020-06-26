import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Error from './components/Error';

import styles from './index.module.scss';

const initialValues = { name: '', email: '', message: '' };

const validate = ({ name, email, message }) => {
  const errors = {};

  if (!name) {
    errors.name = 'El campo nombre es obligatorio';
  }

  if (!email) {
    errors.email = 'El campo nombre es obligatorio';
  }

  if (!message) {
    errors.message = 'El campo nombre es obligatorio';
  }

  return errors;
};

const onSubmit = values => console.log(values);


export default function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
	<div className={styles.containerInput}>
	  <label className={styles.label} htmlFor="name"> Nombre: </label>
	  <Field name="name">
	    { ({ field, meta }) => {
	      const className = meta.touched && meta.error ? styles.inputError : styles.input;
	      return <input {...field} className={className} type="text" id="name" placeholder="Nombre..." />;
	      }
	      }
	    </Field>
	    <ErrorMessage name="name" component={Error} />
	  </div>
	  <div className={styles.containerInput}> 
	    <label className={styles.label} htmlFor="email"> Correo electrónico: </label>
	    <Field name="email">
	      { ({ field, meta }) => {
		const className = meta.touched && meta.error ? styles.inputError : styles.input;
		return <input {...field} className={className} type="email" id="email" placeholder="Correo electrónico..." />;
		}
		}
	      </Field>

	      <ErrorMessage name="email" component={Error} />
	    </div>
	    <div className={styles.containerTextarea}>
	      <label className={styles.label} htmlFor="message"> Mensaje:  </label>
	      <Field name="message">
		{ ({ field, meta }) => {
		  const className = meta.touched && meta.error ? styles.textareaError : styles.textarea;
		  return <textarea {...field} className={className} id="message" placeholder="Mensaje..." />;
		  }
		  }
		</Field>

		<ErrorMessage name="message" component={Error} />
	      </div>
	      <button className={styles.button} type="submit">Enviar</button>
	    </Form>
	  </Formik>
  );
}
