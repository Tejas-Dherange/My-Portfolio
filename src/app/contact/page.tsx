import React from 'react'

function page() {
  return (
    <div className="max-w-md mx-auto mt-24 p-6 rounded-md shadow-md ">
    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
        <input type="email" id="email" name="email" placeholder='Enter email' className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-semibold mb-1">Subject</label>
        <input type="text" id="subject" placeholder='Enter subject' name="subject" className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
        <textarea id="message" name="message" rows={4}placeholder='Enter message' className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" required></textarea>
      </div>
      <button type="submit" className="w-full   bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Send</button>
    </form>
  </div>
  )
}

export default page
