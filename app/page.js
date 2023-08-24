
"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Details from "./details/[id]/page";

export default function Home() {
  const apiUrl = "https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
const getData=()=>{
  
 
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  } ;


useEffect(()=>{getData()},[])

  if (loading) {
    return <p className="text-center font-bold text-5xl">Loading...</p>;
  }

const handleDelete=(id)=>{
  axios.delete(`https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${id}`)
  .then(()=>{getData()})
}

  return (
    <main className="min-h-screen container mx-auto">
<h1 className="text-center font-medium text-3xl mt-10 "> Top News</h1>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {data.map(item => (
          <div key={item.id} className="bg-gray-100 shadow-lg pb-4 rounded-xl">
            <Image src={item.image} alt="image" width="300" height="200" className="w-full rounded-xl" />
          
            <p className="font-medium text-center mt-4">id: {item.id}</p>
            <h1 className="mt-4 text-center">{item.name}</h1>
            <p className="mt-4 font-medium text-center">{item.comment}</p>
            <div className="flex items-center justify-center gap-10">
              <Link href={`/details/${item.id}`}>
                <button className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium">Read more</button>
              </Link>
              <button onClick={()=>{handleDelete(item.id)}} className="border px-4 py-2 rounded mt-4 bg-green-200 hover:bg-white font-medium">delete</button>
              
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
