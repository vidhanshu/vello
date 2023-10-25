import {
  Album,
  Brain,
  Calendar,
  Facebook,
  FolderOpen,
  Instagram,
  Leaf,
  Linkedin,
  ListTodo,
  MonitorPlay,
  Route,
  Twitter,
  Youtube,
} from "lucide-react";

import { APP_NAME } from "@/src/common/utils/constants";
import {
  TFeatureCardProps,
  TPricingCardProps,
  TTestimonialCarouselCardProps,
  TWorkCardProps,
} from "@/src/landing-page/components/types";

export const NAVBAR: {
  title: string;
  items?: { title: string; href: string; description: string }[];
  href?: string;
}[] = [
  {
    title: "Features",
    items: [
      {
        title: "Views",
        href: "/",
        description: "View your team's projects from every angle.",
      },
      {
        title: "Automation",
        href: "/",
        description: "Automate tasks and workflows with Butler automation.",
      },
      {
        title: "Power-Ups",
        href: "/",
        description:
          "Power up your teams by linking their favorite tools with Trello plugins.",
      },
      {
        title: "Templates",
        href: "/",
        description:
          "Give your team a blueprint for success with easy-to-use templates from industry leaders and the " +
          APP_NAME +
          " community.",
      },
      {
        title: "Integration",
        href: "/",
        description:
          "Find the apps your team already using or discover new ways to get work done in " +
          APP_NAME +
          "",
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Marketing teams",
        href: "/",
        description: "View your team's projects from every angle.",
      },
      {
        title: "Product management",
        href: "/",
        description: "Automate tasks and workflows with Butler automation.",
      },
      {
        title: "Engineering teams",
        href: "/",
        description:
          "Power up your teams by linking their favorite tools with Trello plugins.",
      },
      {
        title: "Design teams",
        href: "/",
        description:
          "Give your team a blueprint for success with easy-to-use templates from industry leaders and the " +
          APP_NAME +
          " community.",
      },
      {
        title: "Startups",
        href: "/",
        description:
          "Find the apps your team already using or discover new ways to get work done in " +
          APP_NAME +
          "",
      },
      {
        title: "Remote teams",
        href: "/",
        description:
          "Find the apps your team already using or discover new ways to get work done in " +
          APP_NAME +
          "",
      },
    ],
  },
  {
    title: "Plans",
    items: [
      {
        title: "Standard",
        href: "/",
        description: "View your team's projects from every angle.",
      },
      {
        title: "Premium",
        href: "/",
        description: "Automate tasks and workflows with Butler automation.",
      },
      {
        title: "Enterprise",
        href: "/",
        description:
          "Power up your teams by linking their favorite tools with Trello plugins.",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "" + APP_NAME + " guide",
        href: "/",
        description: "View your team's projects from every angle.",
      },
      {
        title: "Remote work guide",
        href: "/",
        description: "Automate tasks and workflows with Butler automation.",
      },
      {
        title: "Webinars",
        href: "/",
        description:
          "Power up your teams by linking their favorite tools with Trello plugins.",
      },
      {
        title: "Customer stories",
        href: "/",
        description: "View your team's projects from every angle.",
      },
      {
        title: "Developers",
        href: "/",
        description: "Automate tasks and workflows with Butler automation.",
      },
      {
        title: "Help resources",
        href: "/",
        description:
          "Power up your teams by linking their favorite tools with Trello plugins.",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/",
  },
];

export const VELLO_101_CAROUSEL = {
  content: [
    {
      title: "Boards",
      description:
        "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
    },
    {
      title: "Lists",
      description:
        "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team's needs. There's no wrong way to Trello.",
    },
    {
      title: "Cards",
      description:
        "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.",
    },
  ],
  images: [
    "/images/landing-page/vello-101/boards.png",
    "/images/landing-page/vello-101/lists.png",
    "/images/landing-page/vello-101/cards.png",
  ],
};

export const VELLO_IN_ACTION_CAROUSEL = [
  {
    title: "Project management",
    description:
      "Keep tasks in order, deadlines on track, and team members aligned with Trello.",
    color: "#ff7452",
    Icon: FolderOpen,
  },
  {
    title: "Meetings",
    description:
      "Empower your team meetings to be more productive, empowering, and dare we say—fun.",
    color: "#2684ff",
    Icon: MonitorPlay,
  },
  {
    title: "Onboarding",
    description:
      "Onboarding to a new company or project is a snap with Trello's visual layout of to-do's, resources, and progress tracking.",
    color: "#57d9a3",
    Icon: Leaf,
  },
  {
    title: "Task management",
    description:
      "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team's projects a cohesive success every time.",
    color: "#ffc400",
    Icon: ListTodo,
  },
  {
    title: "Brainstorming",
    description:
      "Trello's boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.",
    color: "#00c7e5",
    Icon: Brain,
  },
  {
    title: "Resource hub",
    description:
      "Save time with a well-designed hub that helps teams find information easily and quickly.",
    color: "#f99cdb",
    Icon: Album,
  },
];

export const SEE_WORK_CARDS: TWorkCardProps[] = [
  {
    Icon: Route,
    title: "HIT DEADLINES EVERY TIME",
    description:
      "From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what's coming down the pipeline and identify any gaps that might impede your team's progress.",
    link: "/",
    linkTitle: "Learn more about Timeline view",
    img: "/images/landing-page/see-work/TrelloBoard_Timeline_2x.webp",
    color: "#8777d9",
  },
  {
    Icon: Calendar,
    title: "STAY ON TOP OF TASKS",
    description:
      "Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.",
    link: "/",
    linkTitle: "Learn more about Calender view",
    img: "/images/landing-page/see-work/TrelloBoard_Calendar_2x.webp",
    color: "#00c7e5",
  },
];

export const FEATURES: TFeatureCardProps[] = [
  {
    title: "Integrations",
    description:
      "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.",
    img: "/images/landing-page/ways-to-grow/integration.svg",
    link: "/",
    linkTitle: "Browse Integration",
  },
  {
    title: "Butler Automation",
    description:
      "No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.",
    img: "/images/landing-page/ways-to-grow/gears.svg",
    link: "/",
    linkTitle: "Get to know automation",
  },
  {
    title: "Trello Enterprise",
    description:
      "The productivity tool teams love, paired with the features and security needed for scale.",
    img: "/images/landing-page/ways-to-grow/search.svg",
    link: "/",
    linkTitle: "Explore Enterprise",
  },
];

export const TESTIMONIAL_CAROUSEL: TTestimonialCarouselCardProps[] = [
  {
    author: "Joey Rosenberg",
    designation: "Global Leadership Director at WWC",
    feedback:
      "[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.",
    info: "75% of organizations report that Trello delivers value to their business within 30 days.",
    orgLogo: {
      img: "/images/landing-page/ways-to-grow/woman-who-code-logo.svg",
      width: 84,
      height: 36,
    },
  },
  {
    author: "Sumeet Moghe",
    designation: "Product Manager at ThoughtWorks",
    feedback:
      "Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.",
    info: "81% of customers chose Trello for its ease of use.",
    orgLogo: {
      img: "/images/landing-page/ways-to-grow/through-t-works.svg",
      width: 223,
      height: 36,
    },
  },
  {
    author: "Jefferson Scomacao",
    designation: "Development Manager at IKEA/PTC",
    feedback:
      "We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.",
    info: "74% of customers say Trello has improved communication with their co-workers and teams.",
    orgLogo: {
      img: "/images/landing-page/ways-to-grow/ptc-logo.svg",
      width: 92,
      height: 36,
    },
  },
];

export const PRICING_CARDS: TPricingCardProps[] = [
  {
    name: "FREE",
    frequencyInfo: "Free for your whole team",
    link: "/",
    linkTitle: "Get started",
    description: "For individuals or teams looking to organize any project.",
    price: 0,
  },
  {
    name: "STANDARD",
    frequencyInfo: "Per user/month if billed annually ($6 billed monthly)",
    link: "/",
    linkTitle: "Sign up now",
    description:
      "For small teams that need to manage work and scale collaboration.",
    price: 5,
  },
  {
    name: "PREMIUM",
    frequencyInfo: "Per user/month if billed annually ($12.50 billed monthly)",
    link: "/",
    linkTitle: "Try for free",
    description:
      "For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.",
    price: 10,
  },
  {
    name: "ENTERPRISE",
    frequencyInfo:
      "Per user/month - billed annually ($210.00 annual price per user)",
    link: "/",
    linkTitle: "Contact sales",
    description:
      "For organizations that need to connect work across teams with more security and controls.",
    price: 17.5,
  },
];

export const FOOTER = {
  top: [
    {
      title: "About Vello",
      description: "What's behind the boards.",
      link: "/",
    },
    {
      title: "Jobs",
      description: "Learn about open roles on the Vello team.",
      link: "/",
    },
    {
      title: "Apps",
      description: "Download the Vello App fro your desktop or Mobile devices.",
      link: "/",
    },
    {
      title: "Contact us",
      description: "Need anything? Get in touch and we can help.",
      link: "/",
    },
  ],
  socials: [
    {
      Icon: Instagram,
      link: "https://www.instagram.com/vidhanshu_borade/",
    },
    {
      Icon: Facebook,
      link: "https://www.facebook.com/vidhanshu.borade.18",
    },
    {
      Icon: Linkedin,
      link: "https://linkedin.com/in/vidhanshu",
    },
    {
      Icon: Twitter,
      link: "https://twitter.com/VidhanshuB",
    },
    {
      Icon: Youtube,
      link: "https://www.youtube.com/channel/UC5UYmgXN0KRvS8s1TXWdzhg",
    },
  ],
};
