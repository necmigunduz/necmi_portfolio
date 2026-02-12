import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <h2 className="text-2xl font-bold mb-4">
        <a
          className="text-sky-500 text-3xl md:text-2xl sm:text-xl max-sm:text-lg font-semibold hover:underline"
          href="https://meetings-eu1.hubspot.com/necmi-gunduz"
        >
          {" "}
          Click here to Book an Appointment{" "}
        </a>
      </h2>
      <p>
        <span  className="text-sky-500 text-2xl font-bold mb-4">Or send me an Email:{" "}</span>
        <span>
          <a href="mailto:gund.necmi@gmail.com" className="text-sky-500 text-3xl md:text-2xl sm:text-xl max-sm:text-lg font-semibold hover:underline">gund.necmi@gmail.com</a>{" "}
        </span>
      </p>
      <br />
       <hr />
       <br />
      <p className="text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Necmi Gündüz. All rights reserved.
      </p>
    </section>
  );
}
