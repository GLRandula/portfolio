import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from "emailjs-com";

const serviceID = "service_3jfxhfi"; // EmailJS Service ID
const templateID = "template_id7gmwi"; // EmailJS Template ID
const userID = "tM8Ss0PfnKAfe2aE6"; // EmailJS Public Key

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Email Validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // Handle form submission
  const handleSend = (e) => {
    e.preventDefault();

    if (!username) return setErrMsg("Username is required!");
    if (!phoneNumber) return setErrMsg("Phone number is required!");
    if (!email) return setErrMsg("Please give your Email!");
    if (!emailValidation(email)) return setErrMsg("Give a valid Email!");
    if (!subject) return setErrMsg("Please give your Subject!");
    if (!message) return setErrMsg("Message is required!");

    setErrMsg("");

    const templateParams = {
      user_name: username,
      user_phone: phoneNumber,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSuccessMsg(`Thank you, ${username}! Your message has been sent.`);
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrMsg("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-6 bg-[#1f2744] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-2" onSubmit={handleSend}>

              <h3 className="text-3xl font-bold text-white">Get In Touch</h3>

              <div className="w-full flex flex-col lgl:flex-row gap-10 mt-5">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your Name</p>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="contactInput" />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="contactInput" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="contactInput" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="contactInput" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="contactTextArea" rows="8"></textarea>
              </div>

              <div className="w-60">
                <button type="submit" className="w-full h-12 bg-[#071929] rounded-lg text-gray-400 hover:text-white duration-300 hover:border-designColor border-transparent">
                  Send Message
                </button>
              </div>

              {errMsg && <p className="py-3 text-red-500 text-base text-center">{errMsg}</p>}
              {successMsg && <p className="py-3 text-green-500 text-base text-center">{successMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
