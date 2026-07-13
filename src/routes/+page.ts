export const prerender = true;

const projects = [
  {
    slug: "juna",
    title: "Juna Mechanical Keyboard",
    description: "A 60% custom keyboard with a top mount + gasket o-ring build.",
    banner: {
      path: "/assets/img/projects/juna/file_10.avif",
      alt: "Juna keyboard render",
    },
  },
  {
    slug: "krchv",
    title: "krchv",
    description: "A keyboard archive site, built to preserve and showcase my collection.",
    banner: {
      path: "/assets/img/krchv_screenshot.avif",
      alt: "krchv website screenshot",
    },
  },
];

export async function load() {
  const modules = import.meta.glob("/src/lib/posts/*.md", { eager: true });
  const posts = Object.entries(modules)
    .map(([path, mod]: any) => ({
      slug: path.split("/").pop().replace(".md", ""),
      ...mod.metadata,
    }))
    .filter((p) => !p.draft)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 4);
  return { posts, projects };
}
