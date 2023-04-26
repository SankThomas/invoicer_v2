import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="py-10 lg:px-20 xl:max-w-7xl xl:mx-auto">
        <div>
          <form
            method="post"
            className="contact__form flex flex-col items-center justify-center mt-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name..."
              className="py-2 px-4 mb-3 rounded-lg"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address..."
              className="py-2 px-4 mb-3 rounded-lg"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Please add or change..."
              className="py-2 px-4 mb-3 rounded-lg"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400"
            >
              Submit
            </button>
          </form>

          <div className="px-10 pt-5 pb-10 sm:px-28 lg:px-20 xl:max-w-7xl xl:mx-auto">
            <h4 className="mb-3 text-left text-xl tracking-tight">
              This is how your form submission will look like:
            </h4>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Your message: {message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
