import React from 'react';
import styles from './Contacts.module.css';
import Zoom from 'react-reveal/Zoom';
import Button from "../main/Button";
import ModuleLine from "../main/ModuleLine";
import {useFormik} from "formik";
import {portfolioApi} from "../api/api";

function Contacts() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = 'Name is required';
      } else if (values.name.length > 50) {
        errors.name = 'Name must be less than 50 characters';
      }

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.message) {
        errors.message = 'Message is required';
      } else if (values.message.length > 500) {
        errors.message = 'Name must be less than 500 characters';
      }

      return errors;
    },

    onSubmit: values => {
      console.log(values.name, values.message, values.email)
      portfolioApi.sendMessage(values)
        .then(() => {
          alert('Your message have been sent')
        })
        .catch(e => {
          alert(e)
        })
      formik.resetForm();
    },
  })


  return (
    <div id='Contacts' className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.contactsText}>
          Contacts
        </div>
        <ModuleLine/>
        <Zoom clear>
          <form
            onSubmit={formik.handleSubmit}
            className={styles.contactsForm}>

            <input placeholder='Name'
                   {...formik.getFieldProps('name')}
                   type='text'/>
            {formik.errors.name && formik.touched.name &&
            <div style={{color: 'red'}}>{formik.errors.name}</div>}

            <input placeholder='E-mail'
                   {...formik.getFieldProps('email')}
                   type='email'/>
            {formik.errors.email && formik.touched.email &&
            <div style={{color: 'red'}}>{formik.errors.email}</div>}

            <textarea placeholder='Your message'
                      {...formik.getFieldProps('message')}
                      required=""/>
            {formik.errors.message && formik.touched.message &&
            <div style={{color: 'red'}}>{formik.errors.message}</div>}

            <Button title={'Submit'} type={'submit'}/>

          </form>
        </Zoom>
      </div>
    </div>
  );
}

export default Contacts;
