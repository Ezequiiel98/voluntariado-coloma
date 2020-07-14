import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import SuccessMessage from 'components/Title';
import Loader from 'components/Loader';
import { sendFromContactMail } from 'services/contact.service';

import Error from './components/Error';
import styles from './index.module.scss';

const initialValues = { name: '', email: '', message: '' };

const validate = ({ name, email, message }) => {
  const errors = {};
  const expRegEmail = /(^[0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;

  if (!name) {
    errors.name = 'Este campo es obligatorio.';
  }else if(name.length < 3 || name.length > 30){
    errors.name = 'El nombre debe tener entre 3 y 30 caracteres.';
  }

  if (!email) {
    errors.email = 'Este campo es obligatorio.';
  }else if (!expRegEmail.test(email)){
    errors.email = 'El correo electrónico es inválido.';
  }

  if (!message) {
    errors.message = 'Este campo obligatorio.';
  }else if(message.length < 10){
    errors.message = 'La consulta debe tener más de 10 caracteres.';
  }

  return errors;
};

export default function ContactForm() {
  const [formSentSucessfully, setFormSentSuccessfully] = useState(false);

  const sendForm = async (values, onSubmitProps) => {
    const res  = await sendFromContactMail(values);
    onSubmitProps.setSubmitting(false);
    
    if(res.status === 200){
      return setFormSentSuccessfully(true);      
    } 
    
    return onSubmitProps.setFieldError('message', 'Hubo un problema, vuelva a intentarlo');
  }

  const onSubmit =  (values, onSubmitProps)  => sendForm(values, onSubmitProps);
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      validateOnMount
    >
      {formik => (formik.isSubmitting || formSentSucessfully
	? <div className={styles.containerLoader}> 
	  { formSentSucessfully 
	      ? <SuccessMessage 
	          center
	          Tag="h3"
	          text="Consulta enviada con éxito" 
	          className={styles.successMessage}
	        /> 
	      : <Loader /> 
	  }
	  </div>
	: <Form className={styles.form}>
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
                      return  <input {...field} 
                                className={className}
                                type="email"
                                id="email" 
                                placeholder="Correo electrónico..." 
                              />;
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
	      <button 
	        className={styles.button} 
		type="submit" 
		disabled={!formik.isValid || formik.isSubmitting}>
		Enviar
	      </button>
         </Form>
      )}
    </Formik>
  );
}
