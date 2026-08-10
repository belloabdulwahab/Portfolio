import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contact = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+234 907 060 2504",
    link: "https://wa.me/2349070602504",
  },
  {
    icon: Mail,
    title: "Email",
    value: "belloabdulwahab266@gmail.com",
    link: "mailto:belloabdulwahab266@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria",
  },
  {
    icon: FaGithub, 
    title: "GitHub",
    value: "github.com/belloabdulwahab",
    link: "http://github.com/belloabdulwahab",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "https://www.linkedin.com/in/bello-abdulwahab",
  },
  {
    icon: FaXTwitter,
    title: "X",
    value: "bao2dwrld_",
    link: "https://x.com/bao2dwrld_?s=21",
  },
];

export default contact;