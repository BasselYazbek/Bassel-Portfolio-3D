import { meta, shopify, starbucks, tesla, freelance } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    firebase1,
    bootstrap,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    figma,
    react,
    snapgram,
    summiz,
    threads,
    supermarket,
    coffee,
    vegetables,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: firebase1,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "UI/UX",
    },
];

export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#accbe1",
        date: "Jun 2024 - Jan 2025",
        points: [
            "Built and deployed an eCommerce website using JavaScript, HTML, CSS, and Bootstrap.",
      "Developed a responsive design that works seamlessly across all device screens.",
      "Integrated Firebase for seamless backend functionality, enabling real-time data and product management.",
      "Created an admin page allowing the owner to access, add, and edit items on the site.",
      "Connected the website to EmailJs to receive orders directly via email to the owner's account.",
      "Ensured smooth user experience and cross-browser compatibility.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Frelance",
        icon: freelance,
        iconBg: "#fbc3bc",
        date: "Jun 2023 - Sep 2023",
        points: [
            "Designed and developed the front-end for a responsive coffee shop website using JavaScript, HTML, CSS, and Bootstrap.",
            "Created a visually appealing and user-friendly interface that works flawlessly on all screen sizes.",
            "Implemented engaging and modern styles to provide a pleasant browsing experience.",
            "Focused on responsive design to ensure accessibility across desktops, tablets, and mobile devices.",
            "Collaborated with the team to ensure the website aligns with the coffee shop’s brand and target audience."
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Freelance",
        icon: freelance,
        iconBg: "#b7e4c7",
        date: "Dec 2022 - Feb 2023",
        points: [
            "Developed a user-friendly website for an e-commerce platform specializing in vegetables and fruits using JavaScript, HTML, CSS, and Bootstrap.",
            "Ensured the site is fully responsive, providing a seamless experience on all screen sizes.",
            "Focused on creating an intuitive design that makes it easy for users to browse and shop for fresh produce.",
            "Implemented a clean and modern layout with Bootstrap to enhance the website’s appearance and functionality.",
            "Collaborated on ensuring the site is accessible across multiple devices, maintaining a consistent user experience."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/BasselYazbek',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bassel-yazbek-49014a279/',
    }
];

export const projects = [
    {
        iconUrl: supermarket,
        theme: 'btn-back-red',
        name: 'Wholesaler Web Page',
        description: "Web-based platform for Smart and Sweet, a wholesale distributor offering a wide range of products including chocolates, drinks, gums, and snacks, providing an efficient solution for bulk purchasing.",
        link: 'https://smart-and-sweet.vercel.app/',
    },
    {
        iconUrl: coffee,
        theme: 'btn-back-green',
        name: 'Coffee shop Front-End web page',
        description: 'Front-end website for Roots Café, a cozy coffee shop that offers a user-friendly interface for browsing the menu and learning more about the café’s offerings. The site features a modern design, ensuring a seamless and engaging experience for users across all devices, built using HTML, CSS, JavaScript, and Bootstrap',
        link: 'https://github.com/BasselYazbek/roots1',
    },
    {
        iconUrl: vegetables,
        theme: 'btn-back-blue',
        name: 'Vegetables and Fruits Front-End web page',
        description: 'Created a front-end website for Vegetables and Fruits, an e-commerce platform dedicated to selling fresh produce. The site offers a simple, user-friendly experience for browsing and purchasing products, built with a responsive design to ensure accessibility across all devices. Developed using HTML, CSS, JavaScript, and Bootstrap.',
        link: 'https://github.com/BasselYazbek/Vegetables-and-Fruits',
    },
];