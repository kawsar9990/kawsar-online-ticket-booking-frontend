"use client";

import React, { useState, useRef } from "react";
import { showSuccessAlert, showErrorAlert, showWarningAlert} from "@/utils/swal";
import emailjs from "@emailjs/browser"
import Recaptcha from "@/components/Recaptcha/Recaptcha";
import { useLoader } from "@/context/LoaderContext";

export default function ContactForm(){
const [captchaToken, setCaptchaToken] = useState<string | null>(null);
const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const phoneRef = useRef<HTMLInputElement>(null);
const subjectRef = useRef<HTMLSelectElement>(null);
const messageRef = useRef<HTMLTextAreaElement>(null);
const { showLoader, hideLoader } = useLoader();

const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const {name, value} = e.target;

  if(name === "name"){
    if(/^[A-Za-z _-]*$/.test(value)){
     setFormData((prev) => ({
        ...prev,
        name: value,
      }));
    }
    return;
  }


  if(name === "phone"){
    if(/^\+?[0-9]*$/.test(value)){
    setFormData((prev) => ({
        ...prev,
        phone: value,
      }));
    }
    return;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};



const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
const trimmedName = formData.name.trim();
const trimmedemail = formData.email.trim();
const trimmedPhone = formData.phone.trim();


if (!/^[A-Za-z_-]+(?: [A-Za-z_-]+)*$/.test(trimmedName)) {
  showErrorAlert("Invalid Name", "Please enter a valid English name.");
  return;
};


if (!trimmedemail) {
  showErrorAlert("Email Required", "Please enter your email.");
  return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedemail)) {
  showErrorAlert("Invalid Your Email", "Please enter a valid email address.");
  return;
};

if (trimmedPhone  && !/^\+?[0-9]*$/.test(trimmedPhone)) {
  showErrorAlert("Invalid Phone Number", "Please enter a valid phone number.");
  return;
};

if (!captchaToken) {
  showWarningAlert(
    "Captcha Required",
    "Please verify that you are not a robot."
  );
  return;
}

showLoader();

try{
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "Not Provided",
    subject: formData.subject || "General Inquiry",
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
setCaptchaToken(null);
showSuccessAlert("Request Submitted", "Your request has been submitted successfully.");
}
catch(error: any){
  if(error?.status === 429 || error?.text?.includes("quota")){
    showErrorAlert("Limit Exceeded", "Email limit reached for this month. Please try again later.");
  } else{
    showErrorAlert("Failed to Send", "Something went wrong while sending your message. Please try again.");
  }
}
finally{
  hideLoader();
}

};


return(
<div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-xl">
<div className="mb-8">
<h3 className="text-[20px] md:text-3xl font-bold text-gray-900">Send Us a Message</h3>
<p className="text-gray-500 text-[10px] md:text-[15px] mt-1">
Have a question or want to work together? Fill out the form below.
</p>
</div>

<form onSubmit={handleSubmit} className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div>
  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
    Your Name *
  </label>
  <input
    type="text"
    name="name"
    ref={nameRef}
    required
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name..."
    spellCheck={false}
       onKeyDown={(e) => {
        if(e.key === "Enter"){
          e.preventDefault();

          if (!formData.name.trim()) {
          showWarningAlert("Name Required", "Please enter your name.");
          return;
         }

          emailRef.current?.focus();
        }
      }}
    className="w-full placeholder:text-[10px] placeholder:md:text-[13px] px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
  />
</div>


  <div>
    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
      Email Address *
    </label>
    <input
      type="email"
      name="email"
      ref={emailRef}
      required
      value={formData.email}
      onChange={handleChange}
      spellCheck={false}
      onKeyDown={(e) => {
        if(e.key === "Enter"){
          e.preventDefault();

          if (!formData.email.trim()) {
          showWarningAlert("Email Required", "Please enter your email.");
          return;
          }

          phoneRef.current?.focus();
        }
      }}
      placeholder="Your Email..."
      className="w-full px-4 py-3 placeholder:text-[10px] placeholder:md:text-[13px] rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
    />
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
    Phone Number
  </label>
  <input
    type="tel"
    ref={phoneRef}
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Your Num..."
       onKeyDown={(e) => {
        if(e.key === "Enter"){
          e.preventDefault();

           if (!formData.phone.trim()) {
            showWarningAlert("Phone Required", "Please enter your phone number.");
            return;
           }

          subjectRef.current?.focus();
        }
      }}
    className="w-full px-4 py-3 placeholder:text-[10px] placeholder:md:text-[13px] rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
  />
</div>


<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
  Subject
</label>
<select
  name="subject"
  ref={subjectRef}
  value={formData.subject}
  onChange={handleChange}
     onKeyDown={(e) => {
        if(e.key === "Enter"){
          e.preventDefault();

          if (!formData.subject) {
            showWarningAlert("Subject Required", "Please select a subject.");
            return;
          }

          messageRef.current?.focus();
        }
      }}
  className="w-full px-4 py-3 cursor-pointer rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
>
<option value="" className="cursor-pointer">Select Type</option>
<option value="Ticket Booking Issue" className="cursor-pointer">Ticket Booking Issue</option>
<option value="Refund & Cancellation" className="cursor-pointer">Refund & Cancellation</option>
<option value="Schedule & Route Info" className="cursor-pointer">Schedule & Route Info</option>
<option value="General Inquiry" className="cursor-pointer">General Inquiry</option>
<option value="Others" className="cursor-pointer">Others</option>
</select>
</div>
</div>


<div>
  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
    Your Message *
  </label>
  <textarea
    name="message"
    ref={messageRef}
    rows={5}
    required
    value={formData.message}
    onChange={handleChange}
    placeholder="Write your message here..."
    className="w-full px-4 py-3 placeholder:text-[10px] placeholder:md:text-[13px] rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none resize-none"
  ></textarea>
</div>


<Recaptcha onChange={setCaptchaToken} />



<button
  type="submit"
  className="w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer"
>
  Send Message
</button>
</form>
</div>
)
}