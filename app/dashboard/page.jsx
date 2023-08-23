"use client"

import React from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from 'yup'; 
// import {validationSchema} from "./dashbordFormValidation/Validation"

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  description: Yup.string()
    .required('Description is required'),
});

const Dashboard = () => {
  const handleSubmission = (values, resetForm) => {
    const apiUrl = 'https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website';
    const postData = {
      name: values.name,
      description: values.description,
    };
    axios.post(apiUrl, postData)
      .then(response => {
        console.log("Data successfully posted:", response.data);
        resetForm();
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
  };

  const {
    handleChange,
    values,
    handleSubmit,
    resetForm,
    handleBlur,
    touched,
    errors, 
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema, 
    onSubmit: (values) => {
      handleSubmission(values, resetForm); 
    },
  });

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
      <TextField
  name="name"
  label="Name"
  fullWidth
  variant="outlined"
  value={values.name}
  onChange={handleChange}
  margin="normal"
  onBlur={handleBlur}
  error={touched.name && Boolean(errors.name)} 
  helperText={touched.name && errors.name}
/>
<TextField
  name="description"
  label="Description"
  fullWidth
  variant="outlined"
  value={values.description}
  onChange={handleChange}
  margin="normal"
  multiline
  rows={4}
  onBlur={handleBlur}
  error={touched.description && Boolean(errors.description)} 
  helperText={touched.description && errors.description}
/>

     <button type='submit' className='px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium'>Post</button>
      </form>
    </div>
  );
}

export default Dashboard;
