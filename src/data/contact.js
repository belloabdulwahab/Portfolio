import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const contact = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+234 XXX XXX XXXX",
    link: "https://wa.me/234XXXXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "you@example.com",
    link: "mailto:you@example.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
  },
  {
    icon: FaGithub, 
    title: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "https://linkedin.com/in/yourusername",
  },
  {
    icon: FaXTwitter,
    title: "X",
    value: "",
    link: "",
  },
];

export default contact;