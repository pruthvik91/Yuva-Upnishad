import React from 'react';

function MapSection() {
  return (
    <div className="w-full h-full">
      <iframe
        title="Yuva Upnishad Publication Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41747076543!2d72.7291137!3d21.1591892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1659889001045!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default MapSection;