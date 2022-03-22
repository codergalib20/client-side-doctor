import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#171C28] py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center md:text-left">
        <div className="md:mx-auto mx-2 text-gray-300">
          <h3 className="text-lg md:text-xl font-bold mb-2">Website</h3>
          <ul className="md:text-base text-sm">
            <li> Emergency Dental care</li>
            <li> Treatment for personal</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="mx-2 md:mx-auto  text-gray-300">
          <h3 className="text-lg md:text-xl font-bold mb-2">Company</h3>
          <ul className="md:text-base text-sm">
            <li> Emergency Dental care</li>
            <li> Treatment for personal</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="md:mx-auto mx-2 text-gray-300 py-4 md:py-0 lg:py-0">
          <h3 className="text-lg md:text-xl font-bold mb-2">Find me</h3>
          <p className="text-sm md:text-base">
            you can find us on socail media and book any appointments from us.
          </p>
        </div>
      </div>
      <div className="pt-8 pb-6 text-center text-[#a3a3d6a6]">
        &copy; 2022 all right reserved by Qudrati
      </div>
    </div>
  );
};

export default Footer;
