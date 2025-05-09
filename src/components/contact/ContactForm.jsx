import react, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block mb-2 text-sm">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 rounded border text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
            placeholder="Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded border text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
            placeholder="Email Address"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="mobile" className="block mb-2 text-sm">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 rounded border text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 rounded border text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
            placeholder="City"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 rounded border text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all"
          placeholder="Message"
          required
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;