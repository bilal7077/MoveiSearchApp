import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="flex items-center">
          <FaCopyright className="mr-2" />
          {new Date().getFullYear()} Bilal Ahmad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
