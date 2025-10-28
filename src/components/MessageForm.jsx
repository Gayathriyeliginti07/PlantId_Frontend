// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// export default function MessageForm() {
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         "service_xxx",      // Replace with your EmailJS service ID
//         "template_xxx",     // Replace with your EmailJS template ID
//         { message },        // Template variable in EmailJS
//         "user_xxx"          // Replace with your EmailJS user ID
//       )
//       .then(
//         () => {
//           alert("Message sent successfully!");
//           setMessage("");
//           setLoading(false);
//         },
//         (error) => {
//           alert("Failed to send message. Try again.");
//           console.error(error);
//           setLoading(false);
//         }
//       );
//   };

//   return (
//     <form onSubmit={sendEmail} className="flex flex-col gap-2 mt-6">
//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type your message here..."
//         className="border p-2 rounded w-full"
//         rows={4}
//       />
//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
//       >
//         {loading ? "Sending..." : "Send Message"}
//       </button>
//     </form>
//   );
// }
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function MessageForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      message: message,
    };

    emailjs
      .send(
        "service_h2mrovl",     // ✅ Your Service ID
        "template_e2auore",    // ✅ Your Template ID
        templateParams,
        "yN3LeYzSpEI2zXGxS"   // ✅ Your PUBLIC key (not old userID)
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col gap-2 mt-6">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        className="border p-2 rounded w-full"
        rows={4}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}