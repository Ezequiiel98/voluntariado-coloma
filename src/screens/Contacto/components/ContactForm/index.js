import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Error from './components/Error';

import styles from './index.module.scss';

const initialValues = { name: '', email: '', message: '' };

const validate = ({ name, email, message }) => {
  const errors = {};
  const expRegEmail = /(^[0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;

  if (!name) {
    errors.name = 'Este campo es obligatorio';
  }

  if (!email) {
    errors.email = 'Este campo es obligatorio';
  }else if (!expRegEmail.test(email)){
    errors.email = 'El correo electrónico es invalido';
  }

  if (!message) {
    errors.message = 'Este campo obligatorio';
  }

  return errors;
};

const onSubmit = (values, onSubmitProps) => {
  console.log('pedrito');
  setTimeout( ()=>{
    console.log('juanchilopeisn')
  onSubmitProps.setSubmitting(false);
  }, 2000);
  
}

export default function ContactForm() {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validateOnMount
    >
      {formik => {
	return(
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
		  <button className={styles.button} type="submit" disabled={!formik.isValid || formik.isSubmitting}>Enviar</button>
		</Form>
	  )
      }}
    </Formik>
  );
}
