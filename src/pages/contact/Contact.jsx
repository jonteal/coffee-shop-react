import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
// import emailjs from "emailjs-com";

import "./contact.css";

export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  // handleSubmit using emailjs
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_my20arp",
        "template_j7zva5b",
        formRef.current,
        "user_gA8QSmOG7ld5EfHWWmsof"
      )

      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-zinc-900 text-opacity-50 font-bold text-5xl md:text-6xl font-serif mb-3">
          Get in touch
        </h1>
      </div>
      <hr className="line-break w-10/12 mx-auto self-center" />
      <div className="contact" id="contact-me-section">
        <div className="contact-bg"></div>
        <div className="contact-wrapper flex flex-col md:flex-row items-start">
          <div className="contact-left">
            <h2 className="italic text-4xl font-serif self-center text-center mb-5">
              We'd love to hear from you!
            </h2>

            {/* Contact information */}
            <div className="contact-info">
              <div className="contact-info-item flex flex-row items-center">
                <FaPhoneAlt className="mr-2" />
                <a href="8005555555">+1 (800) 555-5555</a>
              </div>
              <div className="contact-info-item flex flex-row items-center">
                <FaMailBulk className="mr-2" />
                info@hillsidecafe.com
              </div>
              <div className="contact-info-item flex flex-row items-center">
                <FaMapMarkerAlt className="mr-2" />
                Fayetteville, AR
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.9495051927313!2d-94.1598065413548!3d36.06214556452451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96ed7bf718135%3A0xea56ad1d4c2d9656!2sSquare%20Gardens!5e0!3m2!1sen!2sus!4v1696105363572!5m2!1sen!2sus"
                width="600"
                height="450"
                className="w-1/2 h-full border mb-72"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="contact-right">
            {/* Form to reach out via email */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between">
                <input
                  className="border mb-3 mr-3 pl-2"
                  tabIndex={"0"}
                  type="text"
                  placeholder="Name"
                  name="user_name"
                />
                <input
                  className="border mb-3 pl-2"
                  tabIndex={"0"}
                  type="text"
                  placeholder="Email"
                  name="user_email"
                />
              </div>
              <textarea
                className="border pl-2 pt-2"
                tabIndex={"0"}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button className="button px-5 py-2 mt-2 hover:bg-cyan-600">
                Send
              </button>
              {done && "Thank you for your message!"}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
