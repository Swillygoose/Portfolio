import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter, MapPin, Phone, Send } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { toast } from "sonner@2.0.3";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/swilmann/", label: "LinkedIn", handle: "@wilmann" },
  { icon: Github, href: "https://github.com/Swillygoose", label: "GitHub", handle: "@swilmann" },
  { icon: Mail, href: "#", label: "Email", handle: "sandra_wilmann@hotmail.com" },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d1e26aad/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success!
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("sandra_wilmann@hotmail.com");
      toast.success("Email copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy email");
    }
  };

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("+4740300196");
      toast.success("Phone number copied to clipboard!");
    } catch (error) {
      toast.error("Failed to copy phone number");
    }
  };

  return (
    <div className="pt-20 relative bg-gradient-to-br from-[#FFE6D4] via-[#FFC69D]/40 to-[#FFE6D4] overflow-hidden">
      {/* One continuous animated background with blobs */}
      <motion.div
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-[#9D84B7]/25 to-[#E06B80]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -70, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-br from-[#E06B80]/25 to-[#CD2C58]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-[#FFC69D]/20 to-[#9D84B7]/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.35, 1],
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#E06B80]/30 to-[#CD2C58]/20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Large light background shape */}
            <motion.div
              className="absolute inset-0 -m-12 bg-white/30 backdrop-blur-sm rounded-[3rem] -z-10"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, -1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 bg-gradient-to-r from-[#CD2C58] to-[#9D84B7] bg-clip-text text-transparent font-bold"
            >
              Let's Work Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#6B6B8D] max-w-2xl mx-auto"
            >
              Have a project in mind or just want to chat about design? 
              I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible!
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-6 text-[#4A4E69] font-bold">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#6B6B8D] mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="border-[#E06B80]/30 focus:border-[#CD2C58]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-[#6B6B8D] mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border-[#E06B80]/30 focus:border-[#CD2C58]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-[#6B6B8D] mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="border-[#E06B80]/30 focus:border-[#CD2C58]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-[#6B6B8D] mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-[#E06B80]/30 focus:border-[#CD2C58]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#CD2C58] to-[#E06B80] hover:shadow-lg transition-shadow disabled:opacity-50"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>

              {/* Right - Contact Info & Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="mb-6 text-[#4A4E69] font-bold">Get in Touch</h2>
                  
                  {/* Contact Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#CD2C58] to-[#E06B80] shadow-lg">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#6B6B8D]">Email</p>
                        <a href="mailto:hello@alexrivera.design" className="text-[#4A4E69] hover:text-[#CD2C58]">
                          sandra_wilmann@hotmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 cursor-pointer" onClick={handleCopyPhone}>
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#9D84B7] to-[#7B68A6] shadow-lg">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#6B6B8D]">Phone</p>
                        <p className="text-[#4A4E69] hover:text-[#CD2C58]">
                          +47 40 30 01 96
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#E06B80] to-[#FFC69D] shadow-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#6B6B8D]">Location</p>
                        <p className="text-[#4A4E69]">Oslo, Norway</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="text-sm text-[#6B6B8D] mb-4">Connect with me</p>
                    <div className="space-y-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        const isEmail = social.label === "Email";
                        return (
                          <motion.a
                            key={index}
                            href={social.href}
                            onClick={isEmail ? handleCopyEmail : undefined}
                            target={!isEmail ? "_blank" : undefined}
                            rel={!isEmail ? "noopener noreferrer" : undefined}
                            whileHover={{ x: 4 }}
                            className="flex items-center gap-4 p-3 rounded-xl bg-[#FFE6D4]/50 hover:bg-[#FFE6D4] transition-colors group cursor-pointer"
                          >
                            <Icon className="w-5 h-5 text-[#CD2C58] group-hover:text-[#E06B80]" />
                            <div>
                              <p className="text-sm text-[#4A4E69]">{social.label}</p>
                              <p className="text-xs text-[#6B6B8D]">{social.handle}</p>
                            </div>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}