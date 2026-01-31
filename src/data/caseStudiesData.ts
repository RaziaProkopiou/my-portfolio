import hartlandThumb from "../assets/hartland/hartland-thumb.png";
import hartlandHeader from "../assets/hartland/hartland-header.png";
import hartlandCA from "../assets/hartland/hartland-CA.svg";
import hartlandPersona from "../assets/hartland/hartland-UP.svg";
import hartlandSitemap from "../assets/hartland/hartland-SM.png";
import hartlandSketches from "../assets/hartland/hartland-sketches.png";
import hartlandWireframes from "../assets/hartland/hartland-WF.png";
import logoAddition from "../assets/hartland/hartland-LA.png";
import evergreenThumb from "../assets/evergreen/evergreen-thumb.png";
import evergreenHeader from "../assets/evergreen/evergreen-header.png";
import evergreenCA from "../assets/evergreen/evergreen-CA.svg";
import evergreenPersona from "../assets/evergreen/evergreen-UP.png";
import evergreenSitemap from "../assets/evergreen/evergreen-SM.png";
import evergreenSketches from "../assets/evergreen/evergreen-sketches.png";
import evergreenWireframes1 from "../assets/evergreen/evergreen-WF1.png";
import evergreenWireframes2 from "../assets/evergreen/evergreen-WF2.png";
import locaThumb from "../assets/LocaShop/loca-thumb.png";
import locaHeader from "../assets/LocaShop/loca-header.png";
import locaCA from "../assets/LocaShop/loca-CA.png";
import locaSitemap1 from "../assets/LocaShop/loca-SMB.png";
import locaSitemap2 from "../assets/LocaShop/loca-SMS.png";
import locaWireframes1 from "../assets/LocaShop/loca-WFB.png";
import locaWireframes2 from "../assets/LocaShop/loca-WFS.png";

export interface Section {
  id: string;
  heading: string;
  content?: string;
  contentBlocks?: string[];
  image?: string;
  images?: string[];
  embedUrl?: string;
  embedUrls?: { label: string; url: string }[];
  buttonUrls?: { label: string; url: string }[];
  subsections?: {
    id?: string;
    heading?: string;
    content?: string;
    contentBlocks?: string[];
    images?: string[];
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  thumbnail: string;
  sections: Section[];
  headerImage?: string;
  extraImages?: string[];
}

export const caseStudies: CaseStudy[] = [
  /* -----------------------------------Hartland Case Study--------------------------------------- */
  {
    id: "hartland",
    title: "Hartland Country House Website",
    description: "Website for a boutique country house to boost accommodation bookings.",
    problem: "Hartland Country House needed a website to increase accommodation bookings.",
    solution: "Designed and developed a fully responsive site highlighting amenities & charm.",
    impact: "Increased booking enquiries and improved online visibility.",
    headerImage: hartlandHeader,
    thumbnail: hartlandThumb,
    sections: [
      {
        id: "discovery",
        heading: "Discovery/research",
        content:
          "I started by doing competitor/industry research after initial discussions with the client. I created a user persona and a sitemap to layout the necessary architectural requirements.",
        // nested subsections
        subsections: [
          {
            id: "competitor",
            heading: "Competitor analysis",
            content:
              "Reviewed competitors to identify common booking UX patterns and opportunities.",
            images: [hartlandCA],
          },
          {
            id: "personas",
            heading: "User personas",
            content:
              "Defined primary persona to guide content hierarchy and CTAs.",
            images: [hartlandPersona],
          },
          {
            id: "sitemap",
            heading: "Sitemap",
            content: "Created sitemap to outline site structure and navigation.",
            images: [hartlandSitemap],
          },
        ],
      },
      {
        id: "refinement",
        heading: "Iteration & Refinement",
        content:
          "Sketches and wireframes were created and iterated on after feedback from client.",
        subsections: [
          {
            id: "sketches",
            heading: "Sketches",
            content:
              "Sketches of the main pages where then created, based off what I gathered in the discovery phase.",
            images: [hartlandSketches],
          },
          {
            id: "wireframes",
            heading: "Wireframes",
            content:
              "Detailed wireframes were then created from the sketches. These were presented to the client to get feedback , besides a few cosmetic and writing changes that they requested, they were happy over all at this stage and eager to see the mock-ups. Below are the main changes requested.",
            images: [hartlandWireframes],
          },
          {
            id: "logo",
            contentBlocks: [
              "I also added an indulge your senses section, made a few changes to writing as requested by the client, and added a contact us button this is linked to the contact form.",
              "The client had the below logo previously created, I traced the font and used it to create a wordmark for the navigation bar, I placed the logo centered and the icons with tooltips for the contact details on the left. "
            ],
            images: [logoAddition],
          }
        ],
      },
      {
        id: "designs",
        heading: "Final Designs",
        contentBlocks:
          ["The final site is responsive, lightweight, and SEO-optimized. The design focused on warm tones and natural textures, reflecting the environment. These are the final mockups and prototypes created from feedback given by the client. After this front-end development was done by me in the final week of the project.",
            "Scroll and click anywhere on the prototype this will highlight clickable areas in blue, you can navigate using those highlighted areas. Expand full screen using the arrows in the right top corner, for best experience.",
            "Please note that due to Figma prototyping limitations, some interactions (like hover effects and certain transitions) may not be fully represented in this prototype. However, the core navigation and layout accurately reflect the final design. Below the prototypes are links to the live site and/or code repository if available."
          ],
        embedUrls: [
          {
            label: "Desktop Prototype",
            url: "https://embed.figma.com/proto/UKCJJOtM49fbcpiRmGmYum/Hartland-Country-House-Website?page-id=2%3A11&node-id=4-11&p=f&viewport=367%2C483%2C0.03&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A11&embed-host=share",
          },
          {
            label: "Mobile Prototype",
            url: "https://embed.figma.com/proto/UKCJJOtM49fbcpiRmGmYum/Hartland-Country-House-Website?page-id=498%3A1125&node-id=498-1127&p=f&viewport=728%2C477%2C0.07&scaling=scale-down&content-scaling=fixed&starting-point-node-id=498%3A1127&embed-host=share",
          },
        ],
        buttonUrls: [
          { label: "Live Demo", url: "https://RaziaProkopiou.github.io/hartland-country-house/" },
          { label: "View Code", url: "https://github.com/RaziaProkopiou/hartland-country-house" },
        ],
        subsections: [
          {
            content: "Static build of the production site for portfolio purposes"
          }
        ],
      },

      {
        id: "retrospective",
        heading: "Retrospective",
        content: "The Hartland website delivers a clean, calm, and responsive experience that reflects the atmosphere of the estate. A lightweight, image-focused layout and clear navigation make it easy for visitors to explore accommodation options while maintaining a sense of space and ease.",
      },
      {
        id: "prospective",
        heading: "Prospective",
        content: "Future enhancements could include richer visual storytelling, improved accessibility, and light analytics to inform ongoing UX decisions. While booking platforms offer reach, Hartland’s own website plays a key role in building trust and conveying the estate’s personality in a more personal way.",
      }
    ],
  },

  /* -----------------------------------Evergreen Family Therapy Case Study--------------------------------------- */
  {
    id: "evergreen",
    title: "Evergreen Family Therapy",
    description: "Website for a therapy practice to manage client appointments and boost visibility.",
    problem: "Evergreen Family Therapy needed a website to increase client bookings and establish an online presence.",
    solution: "Designed and developed a fully responsive site highlighting services & therapist credentials.",
    impact: "Increased client enquiries and improved online visibility.",
    headerImage: evergreenHeader,
    thumbnail: evergreenThumb,
    sections: [
      {
        id: "discovery",
        heading: "Discovery/research",
        content:
          "I started by doing competitor/industry research after initial discussions with the client. I created a user persona and a sitemap to layout the necessary architectural requirements.",
        subsections: [
          {
            id: "competitor",
            heading: "Competitor analysis",
            content:
              "Reviewed competitors to identify common booking UX patterns and opportunities.",
            images: [evergreenCA],
          },
          {
            id: "personas",
            heading: "User personas",
            content:
              "Defined primary persona to guide content hierarchy and CTAs.",
            images: [evergreenPersona],
          },
          {
            id: "sitemap",
            heading: "Sitemap",
            content: "Created sitemap to outline site structure and navigation.",
            images: [evergreenSitemap],
          },
        ],
      },
      {
        id: "refinement",
        heading: "Iteration & Refinement",
        content:
          "Sketches and wireframes were created and iterated on after feedback from client.",
        subsections: [
          {
            id: "sketches",
            heading: "Sketches",
            content:
              "Sketches of the main pages where then created, based off what I gathered in the discovery phase.",
            images: [evergreenSketches],
          },
          {
            id: "wireframes",
            heading: "Wireframes",
            content:
              "Wireframes were then created from the sketches.",
            images: [evergreenWireframes1, evergreenWireframes2],
          },
        ],
      },
      {
        id: "designs",
        heading: "Final Designs",
        contentBlocks:
          ["The final design for Evergreen Family Therapy Centre focused on a warm, welcoming aesthetic using pastal tones and natural textures to create a calming, friendly atmosphere. The site is fully responsive. From the wireframes I created the finer details and added most of the content which the client was happy with, she requested a few slight changes and additions and added some of her more personal details. After this front-end development was done by me in the final week of the project.",
            "Scroll and click anywhere on the prototype this will highlight clickable areas in blue, you can navigate using those highlighted areas. Expand full screen using the arrows in the right top corner, for best experience.",
            "Please note that due to Figma prototyping limitations, some interactions (like hover effects and certain transitions) may not be fully represented in this prototype. However, the core navigation and layout accurately reflect the final design. Below the prototypes are links to the live site and/or code repository if available."
          ],
        embedUrls: [
          {
            label: "Desktop Prototype",
            url: "https://embed.figma.com/proto/000tlLrU3SgULYlOmEgWaR/Evergreen-Family-Therapy-Centre?page-id=0%3A1&node-id=2-61&p=f&viewport=45%2C-191%2C0.23&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A61&embed-host=share",
          },
        ],
        buttonUrls: [
          { label: "Live Site", url: "https://www.eftc.co.za/" },
          { label: "View Code", url: "https://github.com/RaziaProkopiou/evergreen-therapy-website" },
        ],
      },
      {
        id: "retrospective",
        heading: "Retrospective",
        content: "The Evergreen Family Therapy website was designed to feel calm, approachable, and trustworthy. Clear structure, gentle visuals, and simple navigation help guide users through sensitive information without overwhelm, supporting people at an important decision point while maintaining a professional presence for the practice.",
      },
      {
        id: "prospective",
        heading: "Prospective",
        content: "As the practice grows, the website can evolve through small usability and accessibility refinements, alongside content updates that reflect new services or focus areas while preserving the calm, supportive experience at the core of the site.",
      }
    ],
  },


  /* -----------------------------------LocaShop Case Study--------------------------------------- */
  {
    id: "locashop",
    title: "LocaShop",
    description: "Local marketplace mobile app connecting users with nearby businesses and service providers.",
    problem: "Local artisans and small businesses lacked an accessible, easy-to-use digital marketplace to showcase and sell their offerings.",
    solution: "Designed and built a mobile-first local marketplace using Figma, React Native, and TypeScript, focusing on discoverability, seller workflows, and scalable UI components.",
    impact: "Created a realistic end-to-end demo app showcasing product discovery, seller dashboards, and add-to-cart flows — demonstrating strong UI/UX thinking, component architecture, and real-world front-end patterns.",
    headerImage: locaHeader,
    thumbnail: locaThumb,
    sections: [
      {
        id: "discovery",
        heading: "Discovery/research",
        contentBlocks: [
          "Research was conducted through informal interviews with buyers and small sellers to understand discovery, trust, and selling behaviours. Due to the limited scope of the project, research was exploratory and focused on informing early design direction rather than exhaustive validation.",
          "Insights from this phase helped prioritise key screens and features, ensuring decisions were grounded in real user needs rather than assumptions.",
          "Design decisions focused on trust, simplicity, and curated discovery. Seller visibility and image-led layouts were used to build confidence, while streamlined flows reduced friction for both buyers and sellers. Feature scope was intentionally limited to keep the experience approachable and focused."
        ],
        subsections: [
          {
            id: "competitor",
            heading: "Competitor analysis",
            content:
              "Reviewed competitors to identify common booking UX patterns and opportunities.",
            images: [locaCA],
          },
          {
            id: "sitemap",
            heading: "Sitemap",
            contentBlocks: ["A lightweight screen map defining core buyer and seller flows.", "Buyer:"
            ],
            images: [locaSitemap1],
          },
          {
            id: "sitemap2",
            content:
              "Seller:",
            images: [locaSitemap2],
          }
        ],
      },
      {
        id: "refinement",
        heading: "Iteration & Refinement",
        contentBlocks: [
          "Design decisions were refined during this phase, including action placement, content prioritisation, and feature scope.",
          "Refinement during this phase centred on simplifying interactions, reducing cognitive load, and ensuring the product remained approachable for both buyers and sellers, with particular attention to visual discovery, feature restraint, and task-focused seller workflows. These decisions ensured the product remained clear, usable, and grounded in real user needs without adding unnecessary complexity"
        ],
        subsections: [
          {
            id: "wireframes",
            heading: "Wireframes",
            contentBlocks: [
              "While the overall wireframe structure remained stable, they were used to validate core buyer and seller flows before moving into visual design. This stage helped confirm that key tasks could be completed in minimal steps, that information density and hierarchy were appropriate for mobile, and that non-essential screens could be deferred to later versions without impacting the core experience.",
              "Buyer:"
            ],
            images: [locaWireframes1],
          },
          {
            id: "wireframes2",
            content: "Seller:",
            images: [locaWireframes2],
          },
        ],
      },
      {
        id: "designs",
        heading: "Final Designs",
        contentBlocks:
          ["Final designs were informed by early research and validated wireframes, allowing focus to shift to visual hierarchy, accessibility, and component consistency.",
            "Scroll and click anywhere on the prototype this will highlight clickable areas in blue, you can navigate using those highlighted areas. Expand full screen using the arrows in the right top corner, for best experience.",
            "Please note that due to Figma prototyping limitations, some interactions (like hover effects and certain transitions) may not be fully represented in this prototype. However, the core navigation and layout accurately reflect the final design. Below the prototypes are links to the live site and/or code repository if available."
          ],
        embedUrls: [
          {
            label: "Mobile Prototype",
            url: "https://embed.figma.com/proto/V5w7p1YaOSswtVYXFAlcsi/LocaShop?page-id=1%3A2&node-id=69-3354&p=f&viewport=-765%2C539%2C0.5&scaling=scale-down&content-scaling=fixed&starting-point-node-id=69%3A3354&show-proto-sidebar=1&embed-host=share",
          },
        ],
      },
      {
        id: "retrospective",
        heading: "Retrospective",
        content: "This project benefited from strong early structure and clear constraints, allowing wireframes to transition smoothly into high-fidelity designs without heavy rework. Core buyer and seller flows remained clear and focused, avoiding over-design while still supporting key tasks. Intentional feature restraint helped keep the scope realistic and ensured the experience stayed approachable, particularly for small sellers who may be less digitally confident.",
      },
      {
        id: "prospective",
        heading: "Prospective",
        content: "With more time and scope, future iterations would focus on validating and strengthening the experience through usability testing, particularly around seller onboarding and pricing clarity related to platform fees. Additional exploration could include progressive disclosure for filters, lightweight delivery-based location logic, and features such as saved sellers or favourites to support repeat engagement. These improvements would build on the existing foundation without compromising simplicity.",
      }
    ],
  },
];