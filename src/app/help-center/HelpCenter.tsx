'use client';

import { useState, useRef } from 'react';
import Recaptcha from '@/components/Recaptcha/Recaptcha';
import { useLoader } from '@/context/LoaderContext';
import { showSuccessAlert, showErrorAlert, showWarningAlert} from "@/utils/swal";
import { submitHelpCenterForm } from '@/services/helpCenterData';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SupportInfo {
  email: string;
  phone: string; 
  address: string;
  workingHours: string;
}


export default function HelpCenter(){
const [captchaToken, setCaptchaToken] = useState<string | null>(null);
const nameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const phoneRef = useRef<HTMLInputElement>(null);
const subjectRef = useRef<HTMLInputElement>(null);
const messageRef = useRef<HTMLTextAreaElement>(null);
const { showLoader, hideLoader } = useLoader();

const [formData, setFormData] = useState<ContactFormData>({
name: '',
email: '',
phone: '',
subject: '',
message: '',
});


const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

const contactInfo: SupportInfo = {
email: 'kawsar158464@gmail.com',
phone: '+880 1611 236444',
address: 'Tangail, Dhaka, Bangladesh',
workingHours: 'Sat - Thu (08:00 AM - 07:00 PM)',
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null | undefined>) => {
  const { name, value } = e.target;

    if(name === "name"){
    if(/^[A-Za-z _-]*$/.test(value)){
     setFormData((prev) => ({
        ...prev,
        name: value,
      }));
    }
    return;
  };


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
await submitHelpCenterForm(formData);
setIsSubmitted(true);
showSuccessAlert("Success!", "Your message has been sent successfully.");
setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
setCaptchaToken(null);
}
catch(error: any){
showErrorAlert("Error", error.message || "Failed to submit message.");
}
finally{
  hideLoader();
}
};



return (
<div className="min-h-screen lg:pt-25 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        

<div className="bg-gray-900 text-white p-8 text-center">
  <h1 className="text-2xl lg:text-3xl font-bold">Help Center</h1>
  <p className="text-gray-300 text-[9px] lg:text-sm mt-2">
    Have a question or need assistance? Reach out to us below.
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          
<div className="p-8 bg-gray-50 border-r border-gray-200 flex flex-col justify-between">
<div>
<h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Info</h2>          
<div className="space-y-6 text-sm text-gray-600">
<div>
  <p className="font-semibold text-gray-900">Email Us</p>
  <p className="mt-1">{contactInfo.email}</p>
</div>
<div>
  <p className="font-semibold text-gray-900">Call Us</p>
  <p className="mt-1">{contactInfo.phone}</p>
</div>

<div>
      <p className="font-semibold text-gray-900">Location</p>
      <p className="mt-1">{contactInfo.address}</p>
    </div>
    <div>
      <p className="font-semibold text-gray-900">Support Hours</p>
      <p className="mt-1">{contactInfo.workingHours}</p>
    </div>
  </div>
</div>

  <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500">
    We usually respond to messages within 24 hours.
  </div>
</div>


<div className="p-8 md:col-span-2">
<h2 className="text-xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

{isSubmitted && (
  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
    Thank you for your message! Our team will get back to you shortly.
  </div>
)}

<form onSubmit={handleSubmit} className="space-y-4">
<div>
  <label className="block text-[12px] font-medium text-gray-700 mb-1">
    Full Name
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
    className="w-full px-3 py-2 placeholder:text-[10px] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
  />
</div>

<div>
  <label className="block text-[12px] font-medium text-gray-700 mb-1">
    Email Address
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
    className="w-full px-3 py-2 border placeholder:text-[10px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
  />
</div>


<div>
  <label className="block text-[12px] font-medium text-gray-700 mb-1">
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
  className="w-full px-3 py-2 border placeholder:text-[10px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
  />
</div>

<div>
  <label className="block text-[12px] font-medium text-gray-700 mb-1">
    Subject
  </label>
  <input
    type="text"
    required
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
    className="w-full px-3 py-2 border placeholder:text-[10px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
    placeholder="How can we help?"
  />
</div>

<div>
  <label className="block text-[12px] font-medium text-gray-700 mb-1">
    Message
  </label>
  <textarea
    name="message"
    required
    ref={messageRef}
    rows={4}
    value={formData.message}
    onChange={handleChange}
    className="w-full px-3 py-2 border placeholder:text-[10px] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 text-sm"
    placeholder="Write your message here..."
  />
</div>

<Recaptcha onChange={setCaptchaToken} />

<button
  type="submit"
  className="w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 cursor-pointer text-white font-medium text-sm rounded-md transition duration-150 shadow-sm"
>
  Send Message
</button>
</form>
</div>

</div>
</div>
</div>
);
};