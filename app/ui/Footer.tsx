// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 border-t-2 border-black flex justify-between items-center">
      <div className="text-lg font-handwritten">
        <p>Correo: julian.rigare@gmail.com</p>
        <p>Celular: +573006369637</p>
      </div>
      <div className="flex space-x-4" id="contacto">
        <a
          href="https://co.linkedin.com/in/rigare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            className="h-6 w-6"
          />
        </a>
        {/*<a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/youtube.svg"
            alt="YouTube"
            className="h-6 w-6"
          />
        </a>*/}
        <a
          href="https://www.instagram.com/rigare_sas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/instagram.svg"
            alt="Instagram"
            className="h-6 w-6"
          />
        </a>
        <a
          href="https://m.facebook.com/100066176642781/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/facebook.svg"
            alt="Facebook"
            className="h-6 w-6"
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icons/x.svg" alt="Twitter" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
