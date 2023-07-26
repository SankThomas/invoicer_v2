import { useFormik } from "formik";

const ContactForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please enter your name";
    }

    if (!values.email) {
      errors.email = "Please enter a valid email address";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.message) {
      errors.message = "Please enter your message before sending";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submitted successfully");
    },
  });

  return (
    <>
      <div className="py-10 lg:px-20 xl:max-w-7xl xl:mx-auto">
        <div>
          <form
            method="post"
            className="contact__form flex flex-col items-center justify-center mt-6"
            onSubmit={formik.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="name">Enter your name</label>
                {formik.errors.name ? (
                  <small className="text-sm text-rose-500">
                    {formik.errors.name}
                  </small>
                ) : null}
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
                className="py-2 px-4 mb-3 rounded-lg"
                required
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </article>

            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="email">Enter your email address</label>
                {formik.errors.email ? (
                  <small className="text-sm text-rose-500">
                    {formik.errors.email}
                  </small>
                ) : null}
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address..."
                className="py-2 px-4 mb-3 rounded-lg"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </article>

            <article>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <label htmlFor="textarea">Enter your message</label>
                {formik.errors.message ? (
                  <small className="text-sm text-rose-500">
                    {formik.errors.message}
                  </small>
                ) : null}
              </div>
              <textarea
                name="message"
                id="textarea"
                cols="30"
                rows="10"
                placeholder="Please add or change..."
                className="py-2 px-4 mb-3 rounded-lg"
                required
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
            </article>

            <button
              onClick={formik.handleSubmit}
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
            <p>Name: {formik.values.name}</p>
            <p>Email: {formik.values.email}</p>
            <p>Your message: {formik.values.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
