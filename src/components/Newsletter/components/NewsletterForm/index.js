import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import SuccessMessage from 'components/Title';
import Loader from 'components/Loader';
import Error from 'screens/Contacto/components/ContactForm/components/Error/';
import { addNewSuscbriberMc } from 'services/newsletter.service';

import styles from './index.module.scss';

const validate = ({ email }) => {
  const errors = {};
  const expRegEmail = /(^[0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;

  if(!email){
    errors.email = "Debe ingresar el email.";
  }else if (!expRegEmail.test(email)){
    errors.email = 'El correo electrónico es invalido.';
  }
  
  return errors;
}

export default function NewsletterForm() {
  const [sentFormSuccessfully,  setSentFormSucessfully] = useState(false);
  
  const onSubmit = async (values, onSubmitProps) => {
    const res = await addNewSuscbriberMc(values);
    
    onSubmitProps.setSubmitting(false);
    
    if(res.status === 200){
      return setSentFormSucessfully(true);
    };

    return onSubmitProps.setFieldError('email', 'Hubo un problema, vuelva a intentarlo.');
  }

  return(
    <Formik
      initialValues={ {email: ''} }
      validate={validate}
      onSubmit={onSubmit}
      validateOnMount
    >
      {formik => (
	formik.isSubmitting || sentFormSuccessfully 
	  ? <div className={styles.containerLoader}>
              { sentFormSuccessfully 
		? <SuccessMessage 
		    Tag="h3"
		    text="Se ha suscrito con éxito" 
		    className={styles.successMessage} 
		  /> 
	        : <Loader />
	      } 
	    </div>
	  : <Form >
	      <div className={styles.containerForm}>
	         <Field name="email">
	            { 
	              ({ field, meta }) => {
	                const className = meta.touched && meta.error ? styles.inputError : styles.input;
	                return <input {...field} className={className} type="email" placeholder="dejá@tu.mail" />;
	             }
	            }
	          </Field>
                  <button 
	            type="submit" 
	            className={styles.button} 
	            disabled={!formik.isValid || formik.isSubmitting}>
	            + ME SUMO
	          </button>
	       </div> 
	       <div className={styles.error}>
	         <ErrorMessage name="email" component={Error} />
	       </div>
	    </Form>
      )}
    </Formik>  
 )}
