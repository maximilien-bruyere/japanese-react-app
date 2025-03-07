import { Formik, Form, Field, ErrorMessage } from 'formik'; 
 
const VocabulaireForm = () => ( 
    <Formik 
      initialValues={{ email: '', password: '' }} 
      validate={values => { 
        const errors = {}; 
        if (!values.email) { 
          errors.email = 'Required'; 
        } else if ( 
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) 
        ) { 
          errors.email = 'Invalid e-mail address'; 
        } 
        return errors; 
      }} 
      onSubmit={(values, { setSubmitting }) => { 
        console.log(JSON.stringify(values, null, 2)) 
        setSubmitting(false); 
      }} 
    > 
      {({ isSubmitting }) => ( 
        <Form> 
          <Field type="email" name="email" /> 
          <ErrorMessage name="email" component="div" /> 
          <Field type="password" name="password" /> 
          <ErrorMessage name="password" component="div" /> 
          <button type="submit" disabled={isSubmitting}> 
            Submit 
          </button> 
        </Form> 
      )} 
    </Formik> 
);  

export default VocabulaireForm;