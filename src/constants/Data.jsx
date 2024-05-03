import { CompanyIcon, LaptopIcon, PenIcon, PeopleIcon, RocketIcon, ScholarIcon } from "../assets";
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "../assets/Icons";


export const navLinks = [
  { href: '#', text: 'Docs', width: '50px', left: '0px' },
  { href: '#', text: 'Pricing', width: '55px', left: '63px' },
  { href: '#', text: 'About', width: '55px', left: '133px' },
  { href: '#', text: 'Blog', width: '55px', left: '195px' },
  { href: '#', text: 'Community', width: '85px', left: '260px' },
];

export const sectionsData = [
  {
    title: "Junior, Mid and Senior Designers1",
    description: "Ideal for designers at all levels seeking design system guidance and inspiration.",
    image: PenIcon
  },
  {
    title: "Freelancers",
    description: "Tailored for independent creatives looking to streamline their design projects.",
    image: LaptopIcon
  },
  {
    title: "Students",
    description: "A valuable resource for students improving their design skills and understanding design systems.",
    image: ScholarIcon
  },
  {
    title: "Startups",
    description: "Essential for startups aiming to establish a cohesive and professional brand presence.",
    image: RocketIcon
  },
  {
    title: "Agencies",
    description: "Perfect for design agencies that require consistency and efficiency in their projects.",
    image: PeopleIcon
  },
  {
    title: "Enterprises",
    description: "Designed to support large enterprises in maintaining consistency and improving workflows.",
    image: CompanyIcon
  },
];

export const buildingTools = [
  { number: "01", text: "Faster for collaboration" },
  { number: "02", text: "Faster for collaboration" },
  { number: "03", text: "Faster for collaboration" },
  { number: "04", text: "Faster for collaboration" },
  { number: "05", text: "Faster for collaboration" },
  { number: "06", text: "Faster for collaboration" },
]

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Universal checkout", link: "#" },
      { name: "Payment workflows", link: "#" },
      { name: "Observability", link: "#" },
      { name: "UpliftAI", link: "#" },
      { name: "Apps & integrations", link: "#" },
    ],
  },
  {
    title: "Why Us",
    links: [
      { name: "Expand to new markets", link: "#" },
      { name: "Boost payment success", link: "#" },
      { name: "Improve conversion rates", link: "#" },
      { name: "Reduce payments fraud", link: "#" },
      { name: "Recover revenue", link: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "Primer Docs", link: "#" },
      { name: "API Reference", link: "#" },
      { name: "Payment methods guide", link: "#" },
      { name: "Service status", link: "#" },
      { name: "Community", link: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", link: "#" },
      { name: "Success stories", link: "#" },
      { name: "News room", link: "#" },
      { name: "Terms", link: "#" },
      { name: "Privacy", link: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Careers", link: "#" },
    ],
  },
];

export const socialMedia = [
  { imgURL: <TwitterIcon className={"w-6 h-6 fill-secColor2"}/>, 
    label: "facebook logo" 
  },
  { imgURL: <FacebookIcon className={"w-6 h-6 fill-secColor2"}/>, 
    label: "twitter logo" 
  },
  { imgURL: <InstagramIcon className={"w-6 h-6 fill-secColor2"}/>, 
    label: "instagram logo" 
  },
  { imgURL: <GithubIcon className={"w-6 h-6 fill-secColor2"}/>, 
    label: "instagram logo" 
  },
];
  