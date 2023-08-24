
"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { TextField } from "@mui/material";
import { useFormik } from "formik";

export default function Details({ params }) {
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${params.id}`;
    axios
      .get(apiUrl)
      .then(response => {
        setItemData(response.data);
      })
      .catch(error => {
        console.error("Error fetching item data:", error);
      });
  }, []);

  const handleSubmission = async (values, resetForm) => {
    const apiUrl = `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${params.id}`;
    const postData = {
      comment: values.description,
    };

    try {
      const response = await axios.put(apiUrl, postData);
      console.log("Data successfully posted:", response.data);
      resetForm(); // Reset the form here
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      await handleSubmission(values, resetForm);
    },
  });

  if (!itemData) {
    return <p className="text-center text-4xl font-medium">Loading...</p>;
  }

  return (
    <main className="container mx-auto mt-10 min-h-screen ">
      <div>
       <div className="flex items-center justify-center">
       <Image src={itemData.image} alt="image" width={400} height={300} />
       </div>
        <h1 className="text-2xl font-semibold mt-4 text-center">
          {itemData.name}
        </h1>
        <p className=" mt-2  text-red-400 text-center">{itemData.description}</p>
        <p className="text-gray-600 mt-4 font-bold text-4xl text-center">
          date: {itemData.createdAt}
        </p>
        <p className="mt-4 font-medium text-green-500 shadow-lg p-6">
          {itemData.comment}
        </p>

        <div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              name="description"
              label="comment"
              fullWidth
              variant="outlined"
              value={formik.values.description}
              onChange={formik.handleChange}
              margin="normal"
              multiline
              rows={2}
            />
            <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 border rounded-lg bg-green-400 hover:bg-white font-medium"
            >
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
