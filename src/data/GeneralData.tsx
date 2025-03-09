import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolIcon from '@mui/icons-material/School';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export const contactInfo = [
    {
        logo: <MapOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "Puke, Albania"
    },
    {
        logo: <LocalPhoneOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "+355696505173"
    },
    {
        logo: <EmailOutlinedIcon className="text-[#d33857]"
            sx={{
                fontSize: {
                    xs: '20px',
                    sm: '30px',
                    md: '40px',
                    lg: '50px',
                    xl: '50px'
                }
            }} />,
        info: "frankokeci06@gmail.com"
    }
];


export const educationInfo = [
    {
        logo: <SchoolIcon className="text-[#bb324d]" fontSize="large" />,
        title: "Network Technology & IT Security",
        school: "HTL 'Peter Mahringer', Shkodër",
        year: "2019-2025",
        description: "I am in my final year at HTL 'Peter Mahringer' in Shkodër, specializing in Network Technology and IT Security. My education combines theoretical knowledge with practical experience in networking, cybersecurity, and system administration."
    }
]


export const workInfo = [
    {
        logo: <WorkOutlineOutlinedIcon className="text-[#bb324d]" fontSize="large" />,
        title: "IT Intern",
        company: "Doppelmayr/Garaventa Group",
        year: "17/07/2024 - 31/08/2024",
        description: "Assisted in the installation, maintenance, and upgrade of PCs and laptops, including migration to Windows 11. Provided first-level IT support, troubleshooting technical issues for employees. Assisted with PC setup and system deployment using Matrix42 and PVE-Boot."
    }
];


export const personalInfo =
{
    full_name: "Franko Keçi",
    profession: "IT Student",
    abautMe: "I am a student with a deep interest in networking and security, fascinated by how data moves securely across systems and how digital threats can be prevented. Understanding how networks connect the world and the importance of securing them drives my curiosity. I enjoy exploring new technologies, learning about cyber threats, and finding ways to make systems safer. For me, IT security is not just about protection but about constantly evolving and adapting to new challenges in the digital world."
}

export const skills = [ 
    "VLANs",
    "Routing & Switching (CCNA)",
    "Firewall & Security (pfSense, MikroTik)",
    "Penetration Testing (Kali Linux, Wireshark, Ethical Hacking)",
    "Windows Server",
    "Linux Server",
    "Active Directory",
    "Virtualization (VMware, Proxmox)",
    "Java",
    "Bash",
    "PowerShell",
    "MySQL",
    "PostgreSQL",
    "Wireshark",
    "Packet Tracer",
    "Scrum",
    "IT Documentation"
];
