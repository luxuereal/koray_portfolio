// import images
import Hero_person from "../public/assets/images/Hero/person.png";

import figma from "../public/assets/images/Skills/figma.png";
import react_native from "../public/assets/images/Skills/react_native.png";
import ps from "../public/assets/images/Skills/ps.png";
import reactjs from "../public/assets/images/Skills/react.png";
import nodejs from "../public/assets/images/Skills/node.png";
import nextjs from "../public/assets/images/Skills/nextjs.png";
import tailwindcss from "../public/assets/images/Skills/tailwind.png";
import redux from "../public/assets/images/Skills/redux.png";
import ts from "../public/assets/images/Skills/ts.png";

import services_logo1 from "../public/assets/images/Services/logo1.png";
import services_logo2 from "../public/assets/images/Services/logo2.png";
import services_logo3 from "../public/assets/images/Services/logo3.png";

import project1 from "../public/assets/images/projects/img1.png";
import project2 from "../public/assets/images/projects/img2.png";
import project3 from "../public/assets/images/projects/img3.png";
import person_project from "../public/assets/images/projects/person.png";

import avatar1 from "../public/assets/images/Testimonials/avatar1.png";
import avatar2 from "../public/assets/images/Testimonials/avatar2.png";
import avatar3 from "../public/assets/images/Testimonials/avatar3.png";

import Hireme_person from "../public/assets/images/Hireme/person.png";
import Hireme_person2 from "../public/assets/images/Hireme/person2.png";
import coverVideo from "../public/assets/videos/coverVideo.mp4";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "Koray",
    LastName: "Ozay",
    btnText: "Hire Me",
    image: Hero_person,
    video: coverVideo,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "",
        logo: figma,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "",
        logo: ps,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "React Native",
        para: "",
        logo: react_native,
      },
      {
        name: "Next.js",
        para: "",
        logo: nextjs,
      },
      {
        name: "Tailwind CSS",
        para: "",
        logo: tailwindcss,
      },
      {
        name: "Redux",
        para: "",
        logo: redux,
      },
      {
        name: "TypeScript",
        para: "",
        logo: ts,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "A passionate and dedicated full-stack developer with a strong background in crafting dynamic and responsive web applications. With 7 years of hands-on experience in the field, I have honed my skills across the entire software development lifecycle, from concept and design to implementation, testing, and deployment.",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGN",
        para: "3+ years experienced UI designer with a prolific record in analyzing and identifying user requirements to steer interface design & development. Proficient in enhancing user & customer experience by creatively developing new design concepts. Adept at leading usability testing and accessing prior user engagements to bolster design and interface.",
        logo: services_logo2,
      },
      {
        title: "Mobile App Development",
        para: "Highly skilled Mobile Developer with 4 years of experience designing, developing, and launching mobile applications that achieved a 4.5-star rating on both the App Store and Google Play. Proven track record in implementing automated testing processes, reducing bugs by 30% and improving overall code quality by 20%. Collaborative team player with exceptional skills in UI design, backend integration, and optimizing mobile application performance for increased user satisfaction and retention.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "eCommerce Website",
        image: project1,
        detail:
          "Shopee is an e-commerce site that allows buyers and sellers to easily interact and exchange information about the shop's products and promotions. Therefore, buying and selling on Shopee becomes faster and simpler. You can chat directly with the seller to ask directly about the item to buy. If you want to buy genuine and reputable product lines, Shopee Mall is the ideal choice for you. To make it easy for you to learn and use products, Shopee Blog - Shopee's official information blog - will help you find yourself knowledge about fashion trends, technology reviews, tips. Beauty, consumer news and surprisingly good price deals.",
        siteLink: "https://shopee.vn",
      },
      {
        title: "Best Weight Loss App",
        image: project2,
        detail:
          "Qalorie is an all-in-one nutrition and weight loss app designed to help you reach your health and fitness goals. Track your nutrients with our micro & macro calculator, progress and turn your fitness goals into reality. Qalorie is suitable for all diets and cultures, including mediterranean, vegetarian, pescatarian, carnivore as well as a keto and vegan diet. Log your meals in the food journal, keep track of your calorie intake and get insight into a variety of nutritional information with our healthy food tracker, including your intake of vitamins, minerals, macros and water consumption.",
        siteLink: "https://qalorie.com",
        appLink_Apple: "https://apps.apple.com/us/app/qalorie/id1538149091",
        appLink_Google:
          "https://play.google.com/store/apps/details?id=com.qalorieapp",
      },
      {
        title: "Fashion Service App",
        image: project3,
        detail:
          "Borw is active, committed, and focused on creating a positive impact on our world through embracing people to be part of circular fashion. The app is designed to serve fashion lovers globally & it’s the only app where you can support sustainable fashion in 5 different ways; Hire/Rent/Buy/Sell/Donate, while socialising with the sustainable and ethical fashion community.",
        siteLink: "https://borw.app",
        appLink_Apple: "https://apps.apple.com/ca/app/borw/id1504578577",
        appLink_Google:
          "https://play.google.com/store/apps/details?id=com.borw",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Koray has embraced our work and has efficiently supported our product development needs in the \
          Telecom vertical. He was truly committed to working \
          along with our R&D team, they acted as an extended team for close to a decade \
          and met the time to market needs for our requirements. This journey of a \
          longstanding relationship with Koray has evolved from an outsourced development \
          partner to a co-development partner, and we wish to maintain this partnership \
          over the coming years.”",
        img: avatar1,
        name: "SHWETA SRIVASTAVA (CTO - Paul Merchants Co., Ltd.)",
      },
      {
        review:
          "“As the \
          senior developer, he has readily fulfilled his responsibilities of developing the \
          online platform within the given timeframe.The final product was very functional, \
          tasteful, and aesthetically nice to look at. I already recommended them to other \
          customers and I think that would be the best testimonial and the ultimate \
          recognition.”",
        img: avatar2,
        name: "RABIA ABU HANNA (Software Development Team Lead at Amdocs)",
      },
      {
        review:
          "“We were looking for a very specific type of website - we wanted an \
          uncluttered and professional type of design. There are many suppliers who can \
          provide busy, wordy, and colorful designs but not many seemed capable of \
          offering a minimal design. Koray impressed us with his \
          understanding of our requirements. The first design arrived very quickly after \
          commissioning, it demonstrated such an excellent understanding of our \
          requirement, it, therefore, required little alteration.”",
        img: avatar3,
        name: "GANG YE (Current Sea Group Chief Operating Officer, At that time Technical Manager)",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Client's satisfaction is my first concern. Coding is the part of my life! Support to client's business with my problem-solving skills is pleasure",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
