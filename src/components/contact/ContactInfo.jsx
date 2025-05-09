import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
        <div className="mb-4 text-orange-500">
          <MapPin size={40} />
        </div>
        <p className="text-center text-gray-800">
          2nd Floor, Ankur Shopping Centre,<br />
          Gujarat Gas Cir, opp. Vijay Dairy, Maitry Society,<br />
          Muktanand Nagar, Adajan, Surat,<br />
          Gujarat 395009
        </p>
      </div>
      
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
        <div className="mb-4 text-orange-500">
          <Phone size={40} />
        </div>
        <p className="text-center text-gray-800 text-lg font-medium">
          +91 99094 49289
        </p>
      </div>
      
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
        <div className="mb-4 text-orange-500">
          <Mail size={40} />
        </div>
        <p className="text-center text-gray-800 break-all">
          yuvaupnishadpublication@gmail.com
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;