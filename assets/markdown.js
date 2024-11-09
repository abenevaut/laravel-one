import { r as reactExports, j as jsxRuntimeExports } from "./App2.js";
function ScrollToHash() {
  reactExports.useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return null;
}
function Markdown({ article }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "\n      max-w-none\n      prose prose-base dark:prose-invert\n      prose-headings:no-underline\n      prose-headings:text-gray-900 prose-headings:dark:text-white\n      prose-a:no-underline\n      prose-a:text-abenevaut-500 prose-a:dark:text-abenevaut-600\n      hover:prose-a:text-abenevaut-600 hover:prose-a:dark:text-abenevaut-500\n      prose-p:text-gray-900 prose-p:dark:text-white\n      prose-li:text-gray-900 prose-li:dark:text-white\n    ", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { dangerouslySetInnerHTML: { __html: article } }) });
}
export {
  Markdown as M,
  ScrollToHash as S
};
//# sourceMappingURL=markdown.js.map
