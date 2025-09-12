import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 p-2 mt-20 border rounded-full fixed right-12 bottom-12 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright */}
        {/* <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Necmi Gündüz. All rights reserved.
        </p> */}

        {/* Social Links */}
        <div className="flex flex-col text-center p-2 text-2xl">
          <a
            href="https://www.linkedin.com/in/necmigunduz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-blue-800 hover:text-3xl"
            />
          </a>
          <a
            href="https://www.instagram.com/apeconomicstutoring/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md hover:text-3xl"
            />
          </a>
          <a
            href="https://www.youtube.com/@necmigunduz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-600 hover:text-3xl"
            />
          </a>
          <a
            href="mailto:necmigunduz@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-lime-300 hover:text-3xl"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
