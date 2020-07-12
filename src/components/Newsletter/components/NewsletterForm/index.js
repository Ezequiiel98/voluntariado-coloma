import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Error from 'screens/Contacto/components/ContactForm/components/Error/';
import { addNewSuscbriberMc } from 'services/newsletter.service';
import styles from './index.module.scss';

const validate = ({ email }) => {
  const errors = {};
  const expRegEmail = /(^[0-9a-zA-Z]+[-._+&])*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;

  if(!email){
    errors.email = "Debe ingresar el email";
  }else if (!expRegEmail.test(email)){
    errors.email = 'El correo electrónico es invalido';
  }
  
  return errors;
}


export default function NewsletterForm({ onSentFormSuccessfully }) {

const onSubmit = async (values, onSubmitProps) => {
  const res = await addNewSuscbriberMc(values);
  onSubmitProps.setSubmitting(false);
  
  if(res.status === 200){
    return onSentFormSuccessfully(true);
  }
  return onSubmitProps.setFieldError('email', 'Hubo un problema, vuelva a intentarlo');
}

  return(
    <Formik
      initialValues={ {email: ''} }
      validate={validate}
      onSubmit={onSubmit}
      validateOnMount
    >
      {formik => (
	formik.isSubmitting 
	  ? <p>awarde</p> 
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
