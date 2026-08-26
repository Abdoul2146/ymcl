export type ProjectCategory = "All" | "Construction" | "Agriculture" | "Import / Export" | "Equipment Logistics";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  desc?: string;
  image: string;
  span: string; // tailwind grid span classes
  badgeColor?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Kaduna State Secretariat Complex",
    category: "Construction",
    desc: "A comprehensive architectural and engineering marvel delivering modern administrative facilities with sustainable design principles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMXX0DwXvjWhn81T4yj7q9ieACedgoLSK7OvXiThiU0g3jsw-I9ezu04dhAd8EKKqjYdhob10xGdCtwmAYUWU8ELH6ZuBNvOzeH33OPso5rSR0RpPURTrEowIcaFhK0iKxMIQ67sz4wpEPIwq2-FwV6hfGMmj8U9ZvGruhLq90ci56aQl9cYx0mrB3ti1B2xq5ZPoCQhY6tfmKOpo6EPyqm3cgg4xIMt24LU9IC30DbiESUr3UwWpRtA",
    span: "md:col-span-8 row-span-2",
    badgeColor: "#d4af37",
  },
  {
    id: "2",
    title: "Northern Agro-Hub Expansion",
    category: "Agriculture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7gtgEgJxruM9etOU6L59YNBJBiJ_ACoERPBLlsTd_v5aSqFpN_BHwZA5x5tg7WLkb7I44TommKyRnGsi1Tlm_XqvOEmvCTBibdyZK-j8-wWTTqtmPgB10tyjVcRDemKcURJH7bYtS4lSZAvQPvLLl9IE63_QdKOxSGt86ZmcfKbGZai6zZ8c4AS_MSR7Op3SZ00bxLlnAEWUaiufDZWi5ekNb4tfY-p7J92-GsInxE_oWF4cFZFnbAQ",
    span: "md:col-span-4 row-span-1",
  },
  {
    id: "3",
    title: "Rivers Trade Terminal",
    category: "Import / Export",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcvEEYxbQsXGVpezlQIXLJQ-4MCgkvYHdwPXjjAnS1J419mATdhHeMiLApJbZ47_x1yYdEHsOICMqRbVJ-HHFPmkM5Tq5ZvRc5jG0XyskLPA5f2BiTW7eB9iueZmb97qSidqRMIW9VFZbLnGJdYzBPpQf4xypif7400Cp_4duVjE_o9QhTpBftTFF1I3UDZl_R3BwCkj3lu5W91-4kkTJPglXIVq5YauThqgQSRFHIhdE_XJA5FOnKHA",
    span: "md:col-span-4 row-span-1",
  },
  {
    id: "4",
    title: "Abuja Corporate HQ Fit-out",
    category: "Construction",
    desc: "Premium interior finishing and structural upgrades.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZgK9WlQ9Pe79er5iBEekU6aysvOvO35vOx7wWeD11tuBktrR9XHFZMVIAwNeZ3x4FfLA2Q-Kb1W1vb7qFQxZC1BgBZfzqvTm_gx7WU8Tj8YXNYLQlyEQdO2PsnC9fdvpJmCe1lEp8p5QyUTlU55FICpSp4rAnYjm4nsGdTBxPtDyin5F1dcLRLCpIX3_ZKxieFIUhCGKJiaTEMEN8OcBsdLq-wN4GZQMJB0ZxAWCy63vketONA9ZSOg",
    span: "md:col-span-6 row-span-1",
    badgeColor: "#d4af37",
  },
  {
    id: "5",
    title: "Heavy Machinery Fleet Deployment",
    category: "Equipment Logistics",
    desc: "Strategic asset allocation for mega-projects.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbhxtP0jboPI3xshouLci11aQQNQpa2yLJATHFizcPb0gdJBWCyQwFtpmtimQJ9gf99lCu35cIpix8CwVWI9o6VpY7atDNWeKV5Jw3FJI1h_mBf8NEscAm8sobX90HWy5OcCzGxxgMksmiQHRmMPYMkwkB9KQ5b2-C3zJzgUUwZlYEUQob_dyc18ae9TsvLJCWK-kwDKgqCNgguZs8lZyZQ20hfK1PQfQkvSgvcWjW2RO9I7VbGL_sHw",
    span: "md:col-span-6 row-span-1",
    badgeColor: "#d4af37",
  },
];
