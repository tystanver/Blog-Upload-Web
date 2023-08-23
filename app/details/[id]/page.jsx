
"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { Query } from "@tanstack/react-query";
import { TextField } from "@mui/material";
import { useFormik } from "formik";

export default function Details({params}) {
    console.log(params)

    const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = 'https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website';
      axios.get(apiUrl)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, []);
    console.log("here is the data",data)






    



    // Define the API endpoint URL and the data you want to update
    // const apiUrl = 'https://your-api-url.com/endpoint';
    // const newData = {
    //   // Your updated data fields here
    // };
    
    // // Make the PUT or PATCH request
    // axios
    //   .put(apiUrl, newData) // Use .patch() for partial updates
    //   .then(response => {
    //     // Handle the success response
    //     console.log('Data updated successfully', response.data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error updating data', error);
    //   });
    


    const handleSubmission = (values) => {
        const apiUrl = `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${params.id}`;
        const postData = {
        comment: values.description,
        
        };
    
        axios.put(apiUrl, postData)
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
       
      } = useFormik({
        initialValues: {
         Comment: "",
        
        },
        // validationSchema: validationSchema,
        onSubmit: (values) => {
          handleSubmission(values);
        },
      });



  const apiUrl = `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${params.id}`;
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    if (params.id) {
     
      axios.get(apiUrl)
        .then(response => {
          setItemData(response.data);
        })
        .catch(error => {
          console.error("Error fetching item data:", error);
        });
    }
  }, [itemData]);

  if (!itemData) {
    return <p>Loading...</p>;

  }

  return (
    <main className=" container mx-auto mt-10 flex justify-center items-center">
       
      <div>
        <Image src={itemData.image} alt="image" width={400} height={300}  />
        <h1 className="text-2xl font-semibold mt-4 text-center">{itemData.name}</h1>
        <p className="text-gray-600 mt-2">{itemData.description}</p>
        <p className="text-gray-600 mt-4 font-bold text-4xl"> date:{itemData. createdAt}</p>
        <p>{itemData.comment}</p>

       <div>
       <form onSubmit={handleSubmit}>
       <TextField
          name="description"
          label="comment"
          fullWidth
          variant="outlined"
          value={values.description}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <button type="submit">submit</button>
       </form>
       </div>

      </div>
    </main>
  );
}
