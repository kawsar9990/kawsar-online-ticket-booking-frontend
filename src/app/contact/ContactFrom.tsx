"use client";

import React, { useState } from "react";
import { notify } from "@/utils/toast";

export default function ContactForm(){
 
const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
notify.success("Requsted Successfully");
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
    required
    value={formData.name}
    onChange={handleChange}
    placeholder="Your Name..."
    spellCheck={false}
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
      required
      value={formData.email}
      onChange={handleChange}
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
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Your Num..."
    className="w-full px-4 py-3 placeholder:text-[10px] placeholder:md:text-[13px] rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
  />
</div>


<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
  Subject
</label>
<select
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  className="w-full px-4 py-3 cursor-pointer rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none"
>
<option value="" className="cursor-pointer">Select Type</option>
<option value="booking" className="cursor-pointer">Ticket Booking Issue</option>
<option value="cancelation" className="cursor-pointer">Refund & Cancellation</option>
<option value="schedule" className="cursor-pointer">Schedule & Route Info</option>
<option value="general" className="cursor-pointer">General Inquiry</option>
<option value="general" className="cursor-pointer">Others</option>
</select>
</div>
</div>


<div>
  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
    Your Message *
  </label>
  <textarea
    name="message"
    rows={5}
    required
    value={formData.message}
    onChange={handleChange}
    placeholder="Write your message here..."
    className="w-full px-4 py-3 placeholder:text-[10px] placeholder:md:text-[13px] rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none resize-none"
  ></textarea>
</div>


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