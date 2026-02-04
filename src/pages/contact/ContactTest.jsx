import React, { useState } from 'react'

function ContactTest() {
  const [loading, setLoading] = useState(false)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  async function handleSubmit(e) { 
    e.preventDefault();  
    setLoading(true);

    try {
      const res = await fetch(
        'https://forms-io.onrender.com/submit-form/6ea4707e-3849-41b8-bd37-99b597d10cdd',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullName, email, subject }),
        }
      );

      const data = await res.json();
      console.log("SUCCESS:", data);

    } catch (err) {
      console.error("ERROR:", err);
      alert("Something went wrong sending the form.");
    }
    setLoading(false);
  }
  return (
    <div className='flex flex-col gap-4 w-full justify-center items-center h-screen'>
      <input type="text" className='w-[30%] border border-black' 
        onChange={(e)=>setFullName(e.target.value)} placeholder='full name' />

      <input type="text" className='w-[30%] border border-black'
        onChange={(e)=>setEmail(e.target.value)} placeholder='email' />

      <textarea className='w-[30%] border border-black'
        onChange={(e)=>setSubject(e.target.value)} placeholder='Message' />

      <button onClick={handleSubmit} 
        className='bg-black text-white p-2'>
        {loading ? "Sending..." : "Submit"}
      </button>
    </div>
  )
}

export default ContactTest;
