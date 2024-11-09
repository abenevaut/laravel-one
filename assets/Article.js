import { a as client, j as jsxRuntimeExports, W as WithoutRouterProvider, A as App } from "./App2.js";
import { S as ScrollToHash, M as Markdown } from "./markdown.js";
const articleObject = window.article;
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(WithoutRouterProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(App, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToHash, {}),
    articleObject ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Markdown, { article: articleObject }) }) }) : ""
  ] }) })
);
//# sourceMappingURL=Article.js.map
