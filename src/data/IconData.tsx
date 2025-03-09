import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
import gmail from "../assets/Icons/gmail.png"
import wp from "../assets/Icons/wp.png"
import { openGitHubPage, openLinkedInPage, openGmail, openWhatsApp, openInstagramPage } from "../utilities/Helpers/ExternalConnection";

export const icons = [
    { src: linkedin, alt: "LinkedIn", onClick: () => openLinkedInPage("franko-keçi-6ba880297") },
    { src: github, alt: "GitHub", onClick: () => openGitHubPage("frankookeci") },
    { src: gmail, alt: "Gmail", onClick: () => openGmail("frankoekci06@gmail.com") },
    { src: wp, alt: "WhatsApp", onClick: () => openWhatsApp("+355696505173") }
  ];

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export const footerIcons = [
  { icon: <LinkedInIcon fontSize="medium" />, onClick: () => openLinkedInPage("franko-keçi-6ba880297") },
  { icon: <InstagramIcon fontSize="medium" />, onClick: () => openInstagramPage("franko___keci") },
  { icon: <EmailOutlinedIcon fontSize="medium" />, onClick: () => openGmail("frankokeci06@gmail.com") },
  { icon: <GitHubIcon fontSize="medium" />, onClick: () => openGitHubPage("frankookeci") },
  { icon: <WhatsAppIcon fontSize="medium" />, onClick: () => openWhatsApp("+355696505173") },
];

