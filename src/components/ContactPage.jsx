// import { useState } from "react";
// import { Button } from "./ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Label } from "./ui/label";
// import { Badge } from "./ui/badge";
// import { Mail, MessageSquare, Send, Heart, Leaf, Github } from "lucide-react";
// import { motion } from "framer-motion";
// import { toast } from "sonner";

// export function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//     toast.success("Thank you for your message! We'll get back to you soon. 🌱");
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const contactMethods = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       description: "Get in touch for technical support",
//       contact: "plantid@gmail.com",
//       color: "blue",
//     },
//     {
//       icon: MessageSquare,
//       title: "Feedback",
//       description: "Share your thoughts and suggestions",
//       contact: "feedback@gmail.com",
//       color: "green",
//     },
//     {
//       icon: Github,
//       title: "GitHub",
//       description: "Contribute to our open source project",
//       contact: "github.com/plantid",
//       color: "gray",
//     },
//   ];

//   const teamMembers = [
//     { name: "Y.Gayathri", role: "Team Lead", avatar: "🧠" },
//     { name: "P.Divya", role: "Team member", avatar: "🌿" },
//     { name: "S.Saibaba", role: "Team member", avatar: "💻" },
//     { name: "P.Devi sree sai", role: "Team member", avatar: "📊" },
//     { name: "Bhargav", role: "Team member", avatar: "🔍" },
//   ];

//   return (
//     <div className="min-h-screen py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/10 dark:to-emerald-900/10">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl font-bold mb-6">
//             <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
//               Get In Touch
//             </span>
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             We'd love to hear from you! Whether you have questions, feedback, or want to collaborate,
//             don't hesitate to reach out.
//           </p>
//         </motion.div>

//         {/* Form and Contact Info */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contact Form */}
//           <motion.div
//             className="lg:col-span-2"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2 }}
//           >
//             <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl flex items-center gap-2">
//                   <MessageSquare className="w-6 h-6 text-green-500" />
//                   Send us a Message
//                 </CardTitle>
//                 <CardDescription>
//                   Fill out the form below and we'll get back to you as soon as possible
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <Label htmlFor="name">Name *</Label>
//                       <Input
//                         id="name"
//                         value={formData.name}
//                         onChange={(e) => handleInputChange("name", e.target.value)}
//                         placeholder="Your full name"
//                         required
//                         className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="email">Email *</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={(e) => handleInputChange("email", e.target.value)}
//                         placeholder="your.email@example.com"
//                         required
//                         className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject *</Label>
//                     <Input
//                       id="subject"
//                       value={formData.subject}
//                       onChange={(e) => handleInputChange("subject", e.target.value)}
//                       placeholder="What's this about?"
//                       required
//                       className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="message">Message *</Label>
//                     <Textarea
//                       id="message"
//                       value={formData.message}
//                       onChange={(e) => handleInputChange("message", e.target.value)}
//                       placeholder="Tell us more about your inquiry, feedback, or collaboration..."
//                       rows={6}
//                       required
//                       className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500 resize-none"
//                     />
//                   </div>

//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg"
//                     >
//                       {isSubmitting ? (
//                         <motion.div
//                           className="flex items-center gap-2"
//                           animate={{ opacity: [1, 0.5, 1] }}
//                           transition={{ duration: 1.5, repeat: Infinity }}
//                         >
//                           <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                           Sending...
//                         </motion.div>
//                       ) : (
//                         <>
//                           <Send className="w-5 h-5 mr-2" />
//                           Send Message
//                         </>
//                       )}
//                     </Button>
//                   </motion.div>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Contact Methods */}
//           <motion.div
//             className="space-y-6 h-full"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl">
//               <CardHeader>
//                 <CardTitle>Other Ways to Reach Us</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {contactMethods.map((method, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 + index * 0.1 }}
//                     className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors cursor-pointer"
//                   >
//                     <div
//                       className={`p-2 rounded-lg ${
//                         method.color === "blue"
//                           ? "bg-blue-100 dark:bg-blue-900/50"
//                           : method.color === "green"
//                           ? "bg-green-100 dark:bg-green-900/50"
//                           : "bg-gray-100 dark:bg-gray-700/50"
//                       }`}
//                     >
//                       <method.icon
//                         className={`w-4 h-4 ${
//                           method.color === "blue"
//                             ? "text-blue-600 dark:text-blue-400"
//                             : method.color === "green"
//                             ? "text-green-600 dark:text-green-400"
//                             : "text-gray-600 dark:text-gray-400"
//                         }`}
//                       />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-900 dark:text-white">{method.title}</h4>
//                       <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
//                         {method.description}
//                       </p>
//                       <p className="text-sm text-green-600 dark:text-green-400 font-medium">
//                         {method.contact}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>

//         {/* Team Section (Moved Below Form) */}
//         <motion.div
//           className="mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <Card className="mt-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl">
//             <CardHeader className="text-center">
//               <CardTitle>Meet Our Team</CardTitle>
//               <CardDescription>The people behind PlantID</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {teamMembers.map((member, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 + index * 0.1 }}
//                     className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
//                   >
//                     <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl mb-3">
//                       {member.avatar}
//                     </div>
//                     <h4 className="font-bold text-gray-900 dark:text-white">{member.name}</h4>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>

//         {/* Footer */}
//         <motion.div
//           className="mt-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-0 shadow-lg">
//             <CardContent className="p-8">
//               <div className="flex items-center justify-center gap-2 mb-4">
//                 <Leaf className="w-6 h-6 text-green-500" />
//                 <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
//                   PlantID
//                 </span>
//               </div>
//               <p className="text-gray-600 dark:text-gray-400 mb-4">🌱 AI meets Nature</p>
//               <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
//                 © 2024 PlantID. Made with 💚 for nature lovers worldwide.
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Mail, MessageSquare, Send, Heart, Leaf, Github } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  emailjs
    .send(
      "service_h2mrovl", // ✅ Your Service ID
      "template_e2auore", // ✅ Your Template ID
      templateParams,
      "yN3LeYzSpEI2zXGxS" // ✅ Your Public Key
    )
    .then(() => {
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      toast.error("❌ Failed to send message!");
    })
    .finally(() => setIsSubmitting(false));
};


  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for technical support",
      contact: "plantid@gmail.com",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your thoughts and suggestions",
      contact: "feedback@gmail.com",
      color: "green",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Contribute to our open source project",
      contact: "github.com/plantid",
      color: "gray",
    },
  ];

  const teamMembers = [
    { name: "Y.Gayathri", role: "Team Lead", avatar: "🧠" },
    { name: "P.Divya", role: "Team member", avatar: "🌿" },
    { name: "S.Saibaba", role: "Team member", avatar: "💻" },
    { name: "P.Devi sree sai", role: "Team member", avatar: "📊" },
    { name: "Bhargav", role: "Team member", avatar: "🔍" },
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/10 dark:to-emerald-900/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you have questions, feedback, or want to collaborate,
            don't hesitate to reach out.
          </p>
        </motion.div>

        {/* Form and Contact Info */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-green-500" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What's this about?"
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry, feedback, or collaboration..."
                      rows={6}
                      required
                      className="bg-white/50 dark:bg-gray-800/50 border-white/20 focus:border-green-500 resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center gap-2"
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </motion.div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            className="space-y-6 h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        method.color === "blue"
                          ? "bg-blue-100 dark:bg-blue-900/50"
                          : method.color === "green"
                          ? "bg-green-100 dark:bg-green-900/50"
                          : "bg-gray-100 dark:bg-gray-700/50"
                      }`}
                    >
                      <method.icon
                        className={`w-4 h-4 ${
                          method.color === "blue"
                            ? "text-blue-600 dark:text-blue-400"
                            : method.color === "green"
                            ? "text-green-600 dark:text-green-400"
                            : "text-gray-600 dark:text-gray-400"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white">{method.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {method.description}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {method.contact}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Team Section (Moved Below Form) */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="mt-16 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle>Meet Our Team</CardTitle>
              <CardDescription>The people behind PlantID</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl mb-3">
                      {member.avatar}
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{member.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-green-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  PlantID
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">🌱 AI meets Nature</p>
              <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
                © 2024 PlantID. Made with 💚 for nature lovers worldwide.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}