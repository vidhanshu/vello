import { APP_NAME } from "@/src/common/utils/constants";

export const FEATURES: {
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
        "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.",
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
