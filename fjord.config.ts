const fjord: FjordProps = {
  site_name: "Traveltrack", // site name: used in the header and footer
  site_domain: process.env.SITE_DOMAIN || "https://traveltrack.com",
  site_title: "Traveltrack | Travel the world with us.",
  site_description:
    "Traveltrack is your ultimate resource for travel guides and essential information. We provide the best travel tips and advice to help you plan your next trip.",
  keywords: [
    "Budget travel",
    "Solo journeys",
    "Eco-tourism",
    "City guides",
    "Adventure trips",
    "Cultural tours",
    "Travel hacks",
    "Beach vacations",
    "Mountain retreats",
    "Foodie destinations",
  ],
  authors: [{ name: "9d8", url: "https://9d8.dev" }],
  posts_per_page: 9,
  wordpress_url: "https://traveltrack-27e7f5.ingress-baronn.ewp.live/",
  google_analytics_id: "G-7VM8KZENP7",

  logo: "/logo.jpg",

  // change the font using `next/font` in `layout.tsx` in the app directory.
  // check out the docs here: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#google-fonts

  menu: {
    main: {
      home: "/", // Don't Change
      articles: "/articles", // default is `/posts`
    },
    content: {
      authors: "/posts/authors", // default is `/posts/authors`
      categories: "/posts/categories", // default is `/posts/categories`
      tags: "/posts/tags", // default is `/posts/tags`
      pages: "/all", // default is `/all`
    },
    legal: {
      privacy_policy: "/privacy-policy", // default is `/privacy-policy`
      privacy_policy_text: "Privacy Policy", // default is `Privacy Policy`
      terms_of_service: "/terms-of-service", // default is `/terms-of-service`
      terms_of_service_text: "Terms of Service", // default is `Terms of Service`
    },
    cta: "https://github.com/9d8dev/fjord", // Link to CTA
  },

  nav_menu: {
    title: "Pages",
    items: [
      {
        title: "About",
        href: "/about",
        description:
          "Learn more about Fjord and how to use it for your next project.",
      },
      {
        title: "Contact",
        href: "/contact",
        description:
          "Get in touch with us if you have any questions or feedback. We would love to hear from you.",
      },
      {
        title: "All Pages",
        href: "/all",
        description: "A list of all the pages on this site.",
      },
      {
        title: "Authors",
        href: "/posts/authors",
        description: "A list of all the authors on this site.",
      },
    ],
  },

  directory_menu: {
    title: "Learn Fjord",
    items: [
      {
        title: "Documentation",
        href: "https://github.com/9d8dev/fjord",
        description:
          "Styles for headings, paragraphs, lists, and other inline elements.",
      },
      {
        title: "Layout Components",
        href: "https://github.com/9d8dev/fjord",
        description:
          "Components that help you lay out your content, like Main, Craft.Section, and Craft.Container.",
      },
      {
        title: "Navigation",
        href: "https://github.com/9d8dev/craft/wiki/components#nav-component",
        description:
          "A Navigation component that helps you build accessible navigation menus.",
      },
    ],
  },
};

export default fjord;
