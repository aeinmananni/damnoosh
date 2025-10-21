import { BLOG_ITEMS } from "../../data";
import { SACart } from "./components";
import { useChangeLanguage } from "../../hooks/useChangeLanguage";

export default function Blog() {
  const { language } = useChangeLanguage();
  return (
    <div className="w-full h-full  shrink-0  p-5 grid   grid-cols-1 lg:grid-cols-2 border gap-2 overflow-y-auto neon-border">
      {BLOG_ITEMS.map((blog) => (
        <SACart
          key={blog.id}
          image={blog.image}
          title={blog.title[language]}
          exp={blog.exp[language]}
        />
      ))}
    </div>
  );
}
