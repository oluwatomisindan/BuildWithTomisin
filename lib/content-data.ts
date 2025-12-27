export type ContentCategory = "YouTube" | "Twitter" | "Article" | "All";

export interface ContentItem {
  id: string;
  type: ContentCategory;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  date: string;
  tags: string[];
}

export const MOCK_CONTENT: ContentItem[] = [
  {
    id: "yt-1",
    type: "YouTube",
    title: "Building a Production-Grade Next.js 15 App",
    description: "In this video, we dive deep into the architecture of a modern Next.js 15 application, exploring the App Router, Server Components, and more.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop",
    url: "https://youtube.com/watch?v=example1",
    date: "2024-11-15",
    tags: ["Next.js", "Architecture", "Engineering"],
  },
  {
    id: "tw-1",
    type: "Twitter",
    title: "10 Tips for Better Frontend Performance",
    description: "A comprehensive thread on optimizing React applications for maximum speed and efficiency.",
    thumbnail: "https://images.unsplash.com/photo-1611605645802-c21be743c321?q=80&w=2070&auto=format&fit=crop",
    url: "https://twitter.com/example/status/123",
    date: "2024-12-01",
    tags: ["Performance", "React", "Frontend"],
  },
  {
    id: "yt-2",
    type: "YouTube",
    title: "Mastering Tailwind CSS v4",
    description: "Exploring the latest features in Tailwind CSS v4, including the new @theme directive and improved performance.",
    thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop",
    url: "https://youtube.com/watch?v=example2",
    date: "2024-12-10",
    tags: ["Tailwind", "CSS", "UI/UX"],
  },
  {
    id: "art-1",
    type: "Article",
    title: "The Future of Web Development in Lagos",
    description: "Insights into the growing tech ecosystem in Lagos and how developers are shaping the digital landscape of Africa.",
    thumbnail: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    url: "https://dev.to/example/future-of-web-dev",
    date: "2024-09-20",
    tags: ["Tech", "Africa", "Lagos"],
  },
  {
    id: "tw-2",
    type: "Twitter",
    title: "Why Typescript is Essential for Large Codebases",
    description: "Breaking down the benefits of static typing and how it prevents bugs in enterprise-level applications.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    url: "https://twitter.com/example/status/456",
    date: "2024-10-05",
    tags: ["Typescript", "DX", "Architecture"],
  },
  {
    id: "yt-3",
    type: "YouTube",
    title: "Architecting Scalable Design Systems",
    description: "Learn how to build a design system that scales across multiple teams and products using React and Styled Components.",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    url: "https://youtube.com/watch?v=example3",
    date: "2024-08-12",
    tags: ["Design Systems", "Scalability", "UI"],
  },
];
