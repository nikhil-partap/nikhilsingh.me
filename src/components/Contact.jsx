import React, {useState} from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
    // Clear error on input change
    setErrors((prev) => ({...prev, [name]: ""}));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim() || formData.firstName.length < 2) {
      newErrors.firstName =
        "Please enter a valid first name (at least 2 characters)";
    }
    // if (!formData.lastName.trim() || formData.lastName.length < 0) {
    //     newErrors.lastName = 'Please enter a valid last name (at least 2 characters)';
    // }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }
    // Phone is optional, no validation
    if (!formData.message.trim() || formData.message.length < 1) {
      newErrors.message = "Please enter a message (at least 10 characters)";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual form submission endpoint (e.g., Formspree URL)
      const response = await fetch("https://formspree.io/f/xqalarwg", {
        // Update this URL
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <section
        className="bg-black text-white pt-16 pb-40 bg-center bg-cover relative"
        style={{backgroundImage: "url('/images/contact_bg.png')"}}
      >
        {/* Optional dark overlay for readability */}
        <div className="inset-0 bg-black/70">
          <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
            {/* Left Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                Get in touch
              </h2>
              <p className="text-gray-300 mb-8">
                I'm actively seeking opportunities for internships, freelance
                projects, and collaborative development work. Whether you have a
                project in mind, want to discuss technology, or are looking for
                a dedicated developer to join your team, I'd love to hear from
                you.
              </p>

              <dl className="space-y-6">
                <div>
                  <dt className="flex items-center gap-3 font-semibold text-lg">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Address
                  </dt>
                  <dd className="text-gray-400 ml-9">
                    Rajpura
                    <br />
                    Punjab, INDIA
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-3 font-semibold text-lg">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25A2.25 2.25 0 0 0 21.75 19.5v-1.372a1.125 1.125 0 0 0-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Message
                  </dt>
                  <dd className="text-gray-400 ml-9">
                    <a
                      href="https://www.instagram.com/nikhil_1245b/"
                      className="hover:text-cyan-400 transition"
                    >
                      instagram
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="flex items-center gap-3 font-semibold text-lg">
                    <svg
                      className="w-6 h-6 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v.243a2.25 2.25 0 0 0 1.07 1.916l7.5 4.615a2.25 2.25 0 0 0 2.36 0l7.5-4.615a2.25 2.25 0 0 0 1.07-1.916V6.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Email
                  </dt>
                  <dd className="text-gray-400 ml-9">
                    <a
                      href="nikhilpartap.web@gmail.com"
                      className="hover:text-cyan-400 transition"
                    >
                      nikhilpartap.web@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-900/50 text-green-300 border border-green-700"
                      : "bg-red-900/50 text-red-300 border border-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block mb-2 text-sm font-medium"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-gray-900 text-white border ${
                      errors.firstName ? "border-red-400" : "border-gray-700"
                    } focus:border-cyan-400 focus:ring focus:ring-cyan-400/40`}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-gray-900 text-white border ${
                      errors.lastName ? "border-red-400" : "border-gray-700"
                    } focus:border-cyan-400 focus:ring focus:ring-cyan-400/40`}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-900 text-white border ${
                    errors.email ? "border-red-400" : "border-gray-700"
                  } focus:border-cyan-400 focus:ring focus:ring-cyan-400/40`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone-number"
                  className="block mb-2 text-sm font-medium"
                >
                  Phone number
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40"
                  disabled={isSubmitting}
                />
                {/* No error for phone as it's optional */}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-gray-900 text-white border ${
                    errors.message ? "border-red-400" : "border-gray-700"
                  } focus:border-cyan-400 focus:ring focus:ring-cyan-400/40`}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition focus:ring focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
