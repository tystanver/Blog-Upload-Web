
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
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false); 
      });
  }, []);


  if (loading) {
    return <p className="text-center font-bold text-5xl">Loading...</p>;
  }

  return (
    <main className="min-h-screen container mx-auto">
      <h1>Hello</h1>
      <div className="grid grid-cols-3 gap-10">
        {data.map(item => (
          <div key={item.id}>
            <Image src={item.image} alt="image" width="300" height="200" className="w-full" />
            <p className="font-medium text-center mt-4">id: {item.id}</p>
            <h1 className="mt-4 text-center">{item.name}</h1>
            <p className="mt-4 font-medium text-center">{item.comment}</p>
            <div className="flex items-center justify-center">
              <Link href={`/details/${item.id}`}>
                <button className="border px-4 py-2 rounded mt-4">Read more</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
