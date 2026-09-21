export type SolutionAccent = "brand" | "teal" | "amber" | "rose" | "violet" | "sky";

export type Solution = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: string;
  featured?: boolean;
  badge?: string;
  accent: SolutionAccent;
};

export const solutions: Solution[] = [
  {
    slug: "peoplehub",
    name: "PeopleHub HRIS",
    tagline: "Transforming human capital through intelligent workforce management",
    summary:
      "Our newest and most advanced HR platform — five connected pillars covering core HR, workforce operations, talent management, employee experience and workforce intelligence, all on one shared data model.",
    icon: "Sparkles",
    featured: true,
    badge: "Newly Launched",
    accent: "violet",
  },
  {
    slug: "h2so4",
    name: "H2SO4 HRIS",
    tagline: "Elevate HR efficiency with a complete HRIS platform",
    summary:
      "A proven, full-featured HRIS trusted by 600+ organizations island-wide — 24 integrated modules covering payroll, attendance, performance, training and employee self-service.",
    icon: "Building2",
    featured: true,
    accent: "brand",
  },
  {
    slug: "meal-token",
    name: "Meal Token System",
    tagline: "Fingerprint-based meal management, in real time",
    summary:
      "A dedicated meal automation solution with fingerprint verification and live kitchen reporting — eliminates paper tokens and manual meal counts on the factory or office floor.",
    icon: "UtensilsCrossed",
    badge: "New Product",
    accent: "teal",
  },
  {
    slug: "time-attendance",
    name: "Time & Attendance",
    tagline: "Multi-source attendance capture, always in sync",
    summary:
      "Biometric devices, mobile clock-in, self-portal or third-party API — every attendance record synced in real time and reconciled automatically with payroll.",
    icon: "Clock",
    accent: "amber",
  },
  {
    slug: "point-of-sale",
    name: "Point of Sale (POS)",
    tagline: "Fast, reliable sales at every counter",
    summary:
      "A dependable POS system built for retail and hospitality operations, integrated with inventory and reporting for real-time visibility into sales performance.",
    icon: "ShoppingCart",
    accent: "rose",
  },
  {
    slug: "access-control",
    name: "Access Control & Security",
    tagline: "RFID-based access, event and security management",
    summary:
      "RFID event management and access control systems that keep premises, events and personnel movement secure and fully auditable.",
    icon: "ShieldCheck",
    accent: "sky",
  },
  {
    slug: "inventory-management",
    name: "Inventory Management",
    tagline: "Real-time stock visibility across locations",
    summary:
      "Track stock levels, movements and valuations across warehouses and branches with a system built for accuracy and speed.",
    icon: "Boxes",
    accent: "brand",
  },
  {
    slug: "student-management",
    name: "Student Management",
    tagline: "End-to-end academic administration",
    summary:
      "From admissions and attendance to library automation via RFID, manage the full student lifecycle in one system built for educational institutions.",
    icon: "GraduationCap",
    accent: "teal",
  },
];

export const h2so4 = {
  hero: {
    kicker: "Human Resources Information System",
    title: "Elevate HR efficiency with H2SO4",
    description:
      "H2SO4 is a complete HRIS platform that helps organizations manage HR operations efficiently — from payroll and attendance to performance, training and employee self-service — all from one centralized, secure system.",
  },
  stats: [
    { label: "Founded — years strong", value: "14+", helper: "Since 2012" },
    { label: "Clients island-wide", value: "600+" },
    { label: "Integrated modules", value: "24" },
    { label: "Hosted & always accessible", value: "Cloud" },
  ],
  highlights: [
    {
      icon: "Wallet",
      title: "Automated Payroll & Statutory Compliance",
      description: "EPF/ETF e-returns, APIT, stamp duty, and SLIPS bank files — calculated and generated automatically.",
    },
    {
      icon: "Clock",
      title: "Multi-Source Time & Attendance",
      description: "Biometric devices, the Victory OnTime mobile app, self-portal, or 3rd-party API — all synced in real time.",
    },
    {
      icon: "UserCheck",
      title: "Employee Self Portal",
      description: "Payslips, leave, grievances, meetings, and company news — accessible to every employee.",
    },
  ],
  modules: [
    { icon: "UserCircle", title: "Employee Profile", description: "Personal details, documents, qualifications, family details, and work history in one record." },
    { icon: "Clock", title: "Time & Attendance", description: "Biometric, mobile app, self-portal, or API capture with roster and shift management." },
    { icon: "Palmtree", title: "Absence & Leave Administration", description: "E-leave applications, custom leave categories, and configurable approval workflows." },
    { icon: "HandCoins", title: "Loan Management", description: "Loan applications, guarantors, interest calculation, and auto-deducted repayments." },
    { icon: "Banknote", title: "Payroll & Wage Administration", description: "EPF/ETF e-returns, APIT, stamp duty, payslips, and SLIPS bank file generation." },
    { icon: "Monitor", title: "Asset Management", description: "Registration, depreciation, handover, and full asset history tracking." },
    { icon: "Mail", title: "Letters Management", description: "Auto-generated offer, appointment, warning, increment, and service letters." },
    { icon: "LockKeyhole", title: "Employee Self Portal", description: "Payslips, leave, attendance, grievances, and company news — self-service." },
    { icon: "Smartphone", title: "Victory OnTime Mobile App", description: "GPS & photo-verified mobile clock-in/out for Android and iPhone." },
    { icon: "Target", title: "Performance Evaluation", description: "KPI setting, self & supervisor reviews, and bell-curve appraisal support." },
    { icon: "GraduationCap", title: "Training & Development", description: "Training scheduler, trainer assignment, and training material management." },
    { icon: "MessagesSquare", title: "Grievance Handling", description: "Confidential grievance submission with tracked resolution status." },
    { icon: "UtensilsCrossed", title: "Meal Management", description: "Fingerprint-based meal token system with real-time kitchen reporting." },
    { icon: "HeartPulse", title: "Medical & Insurance", description: "Medical reimbursements, insurance reclaims, and payroll integration." },
    { icon: "IdCard", title: "Company ID", description: "Print standardized, branded employee ID cards directly from the system." },
    { icon: "CalendarDays", title: "Meeting Schedule", description: "Schedule meetings, assign participants, and notify via self-portal." },
    { icon: "Newspaper", title: "Company News", description: "Broadcast company-wide news or send personalized individual notices." },
    { icon: "FolderLock", title: "Document Management", description: "Secure, permission-controlled storage for employee and company documents." },
    { icon: "ListChecks", title: "Employee Tasks", description: "Create, assign, and track tasks with deadlines and hierarchy." },
    { icon: "BellRing", title: "Notifications", description: "Real-time email, SMS, and in-app alerts for leave, tasks, and events." },
    { icon: "KeyRound", title: "Permission Management", description: "Role-based access control with granular, CRUD-level permissions." },
    { icon: "History", title: "Audit Tracker", description: "Full log of user activity for security, compliance, and investigations." },
    { icon: "BarChart3", title: "Reports", description: "Standard and configurable reports across every HR process." },
    { icon: "Headset", title: "Support Ticket System", description: "Centralized submission, tracking, and resolution of user requests." },
  ],
  why: [
    {
      title: "Payroll and attendance that reconcile automatically",
      description:
        "Time & Attendance, Leave, and Loans are fully integrated with Payroll — so allowances, deductions, and statutory contributions calculate correctly, every cycle, without manual reconciliation.",
      points: [
        "EPF/ETF e-returns, APIT, stamp duty, and SLIPS files generated automatically",
        "Attendance captured from biometric devices, mobile app, or self-portal",
        "Multiple pay periods and payroll frequencies supported",
      ],
    },
    {
      title: "A platform employees actually use",
      description:
        "The Employee Self Portal and Victory OnTime mobile app put payslips, leave requests, grievances, and company news directly in employees' hands — reducing the administrative load on HR.",
      points: [
        "Role-based logins for employees and supervisors",
        "GPS and photo-verified mobile attendance",
        "Backed by Victory Information, serving clients since 2012",
      ],
    },
  ],
};

export const peoplehub = {
  hero: {
    kicker: "Human Resource Information System",
    title: "Transforming human capital through intelligent workforce management",
    description:
      "The complete digital platform for managing, engaging, and empowering your workforce — from first hire to org-wide reporting, on one shared source of truth.",
  },
  challenge: {
    title: "HR has outgrown spreadsheets and siloed tools",
    description:
      "HR has evolved from an administrative function into a strategic business partner. Today's organizations need real-time workforce visibility, data-driven decisions, seamless employee experiences, and efficient operations — but many still struggle with the basics.",
    problems: [
      "Disconnected employee data across tools",
      "Manual, paper-driven HR processes",
      "Payroll inefficiencies and rework",
      "Compliance and governance risk",
      "Low employee engagement",
      "Limited workforce analytics",
      "Slow response to employee needs",
      "Administrative burden on HR teams",
    ],
    conclusion:
      "Every gap above is a gap PeopleHub is built to close — with one connected platform instead of a patchwork of spreadsheets, siloed tools, and manual approvals.",
  },
  pillars: [
    { number: "01", title: "Core HR Management", description: "Centralized employee records, employment history, organizational hierarchies, job structures, and workforce information." },
    { number: "02", title: "Workforce Operations", description: "Attendance, leave, payroll, benefits, and employee loans through automated workflows that improve accuracy and efficiency." },
    { number: "03", title: "Talent Management", description: "Recruit, onboard, develop, evaluate, and retain top talent through integrated talent management processes." },
    { number: "04", title: "Employee Experience", description: "Self-service capabilities, engagement tools, communication channels, and knowledge resources for every employee." },
    { number: "05", title: "Workforce Intelligence", description: "Dashboards, reports, and analytics that turn workforce performance and trends into actionable insight." },
  ],
  moduleGroups: [
    {
      group: "Login & Security",
      items: [
        "Email/User ID login with show/hide password and remember-me",
        "Google & Microsoft SSO, plus MFA via email, SMS, or WhatsApp",
        "reCAPTCHA, lockout after 3 failed attempts, IP-based rate limiting",
      ],
    },
    {
      group: "Subscription & Multi-Tenancy",
      items: [
        "5-step guided tenant creation wizard for new organizations",
        "Dedicated database schema auto-created per tenant",
        "Centralized tenant management restricted to Super Admins",
      ],
    },
    {
      group: "Roles & Access Control",
      items: [
        "Granular, module-level permission matrix per role",
        "Standard, MFA-required, or approval-based access tiers",
        "Field-level security to hide or show sensitive data by role",
      ],
    },
    {
      group: "Organization Structure",
      items: [
        "Multi-level entities — departments, divisions, branches, subsidiaries",
        "Tree and list views with legal & registration details per entity",
        "Headcount, vacancy, and workforce distribution tracking",
      ],
    },
    {
      group: "Organization Hierarchy",
      items: [
        "Dynamic role hierarchies based on reporting levels",
        "Role-specific qualifications, skills, and responsibilities",
        "Reusable role profiles that feed straight into recruitment",
      ],
    },
    {
      group: "Employee Master",
      items: [
        "Complete digital profile — identity, contact, compensation, documents",
        "Encrypted storage for sensitive employee fields",
        "Bulk create and update via Excel upload",
      ],
    },
  ],
  engagement: [
    { icon: "Users", title: "Employee Engagement", description: "Surveys, sentiment monitoring, grievance handling, and an internal chat platform." },
    { icon: "BookOpen", title: "Knowledge Base", description: "A searchable policy, procedure, and resource library shared org-wide." },
    { icon: "ListTodo", title: "Task Management & Ticketing", description: "Assign and track tasks, set priorities, and manage HR/IT support tickets." },
    { icon: "Laptop", title: "Asset Management", description: "Allocation, return, maintenance tracking, and ownership records." },
    { icon: "Send", title: "Smart Communication", description: "Timely notifications across email, SMS, WhatsApp, push, and in-app." },
    { icon: "LineChart", title: "Analytics & Dashboards", description: "Headcount, attendance, performance, and turnover — with Power BI & Metabase." },
  ],
  security: [
    { title: "Authentication Security", description: "JWT authentication with configurable token expiration, protected API endpoints, and OTP verification before access is granted." },
    { title: "Account Protection", description: "Lockout after 3 failed logins, IP-based rate limiting at 5 attempts, and reCAPTCHA on login & password recovery." },
    { title: "Audit & Monitoring", description: "Device, browser, OS, and approximate location captured on every login, with full audit logs for compliance reporting." },
    { title: "Role-Based Governance", description: "Granular permissions, approval-based access tiers, and field-level security across every module." },
  ],
  tech: ["Microsoft Azure", ".NET Core", "React", "MS SQL Server"],
  why: [
    "Complete employee lifecycle management",
    "Unified platform for HR, engagement & productivity",
    "Powerful self-service experience",
    "Built-in collaboration & communication tools",
    "Workforce analytics & intelligence",
    "Flexible integration framework",
    "Enterprise-grade security",
    "Cloud-native architecture",
    "Scalable for growing organizations",
    "Dedicated local expertise & support",
  ],
  industries: [
    "Manufacturing",
    "Financial Services",
    "Retail",
    "Healthcare",
    "Hospitality",
    "Education",
    "Logistics",
    "Technology",
    "Government Institutions",
  ],
};

export const mealToken = {
  hero: {
    kicker: "Meal Automation System",
    title: "Fingerprint-verified meal tokens, zero paper trail",
    description:
      "Meal Token replaces manual meal slips and honesty-based counting with fingerprint-verified dispensing and live kitchen reporting — built for factories, estates, and large office canteens across Sri Lanka.",
  },
  highlights: [
    { icon: "Fingerprint", title: "Fingerprint Verification", description: "Every meal is claimed with a fingerprint scan, eliminating duplicate claims, buddy-punching, and lost paper tokens." },
    { icon: "ChefHat", title: "Real-Time Kitchen Reporting", description: "Kitchen and catering staff see live meal counts as they happen, so preparation quantities match actual attendance." },
    { icon: "Layers3", title: "Multiple Meal Categories", description: "Configure breakfast, lunch, dinner, and shift-based meal entitlements per employee grade or department." },
    { icon: "PlugZap", title: "H2SO4 & PeopleHub Integration", description: "Meal data flows directly into payroll for accurate meal-cost deductions or subsidy tracking — no manual reconciliation." },
    { icon: "Building2", title: "Built for Scale", description: "Deployed across factory floors, estates, and multi-shift operations with high daily meal volumes." },
    { icon: "BarChart3", title: "Cost & Consumption Reports", description: "Daily, weekly, and monthly consumption reports to control catering costs and reduce food wastage." },
  ],
};
