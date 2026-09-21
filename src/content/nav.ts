export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "PeopleHub HRIS", href: "/solutions/peoplehub", blurb: "Our newest workforce management platform" },
      { label: "H2SO4 HRIS", href: "/solutions/h2so4", blurb: "Complete HR, payroll & attendance system" },
      { label: "Meal Token System", href: "/solutions/meal-token", blurb: "Fingerprint-based meal management" },
      { label: "All Solutions", href: "/solutions", blurb: "View the full solution range" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const siteConfig = {
  name: "Victory Information (Pvt) Ltd",
  shortName: "Victory Information",
  tagline: "Powerful and bold through high-end software solutions.",
  phone1: "+94 767 444 999",
  phone2: "+94 767 444 999",
  email1: "info@victoryinformation.lk",
  email2: "sales@victoryinformation.lk",
  address: "No 150, Templers Road, Mt. Lavinia, Sri Lanka",
  facebook: "https://www.facebook.com/victoryinformation",
  linkedin: "https://www.linkedin.com/company/victory-information-pvt-ltd/",
};
