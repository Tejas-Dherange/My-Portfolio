'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { motion } from "framer-motion";
// import { LampContainer } from '@/components/ui/lamp'
// import Link from 'next/link'
import { useRouter } from 'next/navigation'
 

const ContactPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    email: "",
    Subject: "",
    message: ""
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const onSend = async () => {
    try {
      setLoading(true)
      setButtonDisabled(true)
      const response = await axios.post("/api/users/conatct", user);
      console.log("message succesful", response.data);
      router.push('/contact')
      setUser({
        email: "",
        Subject: "",
        message: ""
      })

    } catch (error: any) {
      console.log("message  failed");
      toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user.Subject.length > 0 && user.email.length > 0 && user.message.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }

  }, [user])

  return (
    <div className="flex flex-col items-center mt-8 justify-center min-h-screen md:py-2 ">
   
      <h1 className='font-bold text-4xl mt-4'>{loading ? "Ruko jara Sabar Karo" : "Message"}</h1>
       
      <hr />
      <div className="inputContainer flex flex-col items-center bg-gray-900 p-8 mt-3 rounded-lg ">
{/*         <h1 className='font-bold text-xl text-blue-100'> tejasdherange0099@gmail.com</h1> */}
      <label htmlFor="email" className='mt-4 font-bold text-xl text-blue-600'> Email</label>
      <input
        className="p-2 border w-80 mt-4 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />

      <label htmlFor="Subject"  className='mt-4 font-bold text-xl text-blue-600'>Subject</label>
      <input
        className="p-2 border w-80 mt-4 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="Subject"
        type="text"
        value={user.Subject}
        onChange={(e) => setUser({ ...user, Subject: e.target.value })}
        placeholder="Subject"
      />
      <label htmlFor="message"  className='mt-4 font-bold text-xl text-blue-600'>Message</label>
      <input
        className="p-2 border w-80 mt-4 border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="message"
        type="text"
        value={user.message}
        onChange={(e) => setUser({ ...user, message: e.target.value })}
        placeholder="Message"
      />
      <button
        onClick={onSend}
        className="p-2 border hover:bg-slate-600 border-gray-300 rounded-lg mb-4 focus:outline-none  text-white focus:border-gray-600">
        {buttonDisabled ? "No Send" : "Send"}</button>
        
        </div>

    </div>
  )
}

export default ContactPage


