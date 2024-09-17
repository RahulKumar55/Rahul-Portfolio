import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="bg-blackCustom text-goldCustom py-12 md:mx-20 p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Click to Connect</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {/* Phone Card */}
        <div className="flex items-center bg-blackCustom p-4 rounded-lg hover:scale-105 transition-transform">
          <img src="/images/phone.png" alt="Phone" className="w-12 h-12 mr-4" />
          <a href="tel:+14372560176" className="text-lg font-bold">
            +1 (437) 256-0176
          </a>
        </div>

        {/* Email Card */}
        <div className="flex items-center bg-blackCustom p-4 rounded-lg hover:scale-105 transition-transform">
          <img src="/images/email.png" alt="Email" className="w-12 h-12 mr-4" />
          <a href="mailto:rahulkuma5516@gmail.com" className="text-lg font-bold">
            Rahulkuma5516@gmail.com
          </a>
        </div>

        {/* LinkedIn Icon */}
        <div className="flex justify-center items-center bg-blackCustom p-4 rounded-lg">
          <a href="https://www.linkedin.com/in/rahul-kumar-78057a252/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" className="rounded-lg hover:scale-105 transition-transform w-28 h-28 mr-4" />
          </a>
        </div>

        {/* GitHub Icon */}
        <div className="flex justify-center items-center bg-blackCustom p-4 rounded-lg">
          <a href="https://github.com/RahulKumar55" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="Github" className="rounded-lg hover:scale-105 transition-transform w-20 h-20 mr-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contacts;
