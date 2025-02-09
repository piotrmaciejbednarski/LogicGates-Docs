import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { RocketIcon, BookIcon, CircleHelpIcon } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <img src="/icon.svg" alt="Icon" width="32" height="32" />
        LogicGates for Spigot
      </div>
    ),
  },
  links: [
    {
      type: "menu",
      text: "Guide",
      items: [
        {
          text: "Getting Started",
          icon: <BookIcon />,
          description: "Learn to use LogicGates",
          url: "/docs",
        },
        {
          text: "How it works?",
          icon: <CircleHelpIcon />,
          description: "Learn about the main features",
          url: "/docs/using-the-plugin/building-logic-gate#how-it-works",
        },
        {
          text: "Download",
          icon: <RocketIcon />,
          description: "Check the latest version of the plugin",
          url: "https://github.com/piotrmaciejbednarski/LogicGates/releases/latest",
        },
      ],
    },
    {
      text: "Latest version",
      description: "Check the latest version of the plugin",
      url: "https://github.com/piotrmaciejbednarski/LogicGates/releases/latest",
    },
  ],
  githubUrl: "https://github.com/piotrmaciejbednarski/LogicGates/",
};
