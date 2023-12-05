import React from 'react'
import Team from '../team'
import { useState } from 'react';

const HireDevelopers = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    // await axios.post("http://localhost:4567/api/v2/contact", formData)
    //     .then((response) => {
    //         console.log(response)
    //     }).catch((error) => {
    //         console.log(error.message)
    //     }).finally(() => {
    //         setLoading(false)
    //     })
    let number = 7488325096;
    let url = `https://wa.me/9661087999`;
    // Appending the message to the URL by encoding it
    // url += `&text='Hello'`;
    window.open(url);


  }


  return (
    <Team text="Want to Hire Developer?" disc="We create smarter apps for smarter businesses." bt="Hire now!" fun={handleSubmit} to="/hire-developers" />
  )
}

export default HireDevelopers