import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { remarkSandpack } from "remark-sandpack";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "JavaScript From Zero",
  tagline: "Become an ace programmer!",
  favicon: "img/planet.svg",
  url: "https://moonwave99.github.com",
  baseUrl: "/javascript-from-zero/",
  organizationName: "moonwave99",
  projectName: "javascript-from-zero",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: "./lessons",
          routeBasePath: "lessons",
          sidebarPath: "./sidebars.ts",
          beforeDefaultRemarkPlugins: [remarkSandpack],
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Home",

      items: [
        {
          type: "docSidebar",
          sidebarId: "lessonsSidebar",
          position: "left",
          label: "Lessons",
        },
        { to: "https://runjs.co", label: "Code Playground", position: "left" },
        {
          to: "/about",
          position: "left",
          label: "About",
        },
        {
          href: "https://github.com/moonwave99/javascript-from-zero",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://www.diegocaponera.com">Diego Caponera</a>.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
