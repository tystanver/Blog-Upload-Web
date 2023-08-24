"use client"

import React, { useState } from 'react'; // Import useState
import axios from 'axios';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Name must be at most 20 characters')
    .required('Name is required'),
  description: Yup.string().required('Description is required'),
    // .max(200, 'Description must be at most 200 characters')
    
});

const Dashboard = () => {
  const [open, setOpen] = useState(false); // Add the state for the Snackbar

  const handleSubmission = (values, resetForm) => {
    const apiUrl = 'https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website';
    const postData = {
      name: values.name,
      description: values.description,
    };
    axios.post(apiUrl, postData)
      .then(response => {
        console.log("Data successfully posted:", response.data);
        setOpen(true); // Open the Snackbar on success
        resetForm();
      })
      .catch(error => {
        console.error("Error posting data:", error);
      });
  };

  const handleClose = () => {
    setOpen(false); // Close the Snackbar
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
             <button
              type="submit"
              className="px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium"
            >
              Submit
            </button>
        {/* <Button type='submit' variant="contained" color="primary">Post</Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Data successfully posted.
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}

export default Dashboard;
