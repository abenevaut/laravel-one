import { r as reactExports, c as clsx, j as jsxRuntimeExports, L as Link, T as TouchTarget, h, a as client, W as WithoutRouterProvider, A as App } from "./App2.js";
const colors = {
  red: "bg-red-500/15 text-red-700 group-data-[hover]:bg-red-500/25 dark:bg-red-500/10 dark:text-red-400 dark:group-data-[hover]:bg-red-500/20",
  orange: "bg-orange-500/15 text-orange-700 group-data-[hover]:bg-orange-500/25 dark:bg-orange-500/10 dark:text-orange-400 dark:group-data-[hover]:bg-orange-500/20",
  amber: "bg-amber-400/20 text-amber-700 group-data-[hover]:bg-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:group-data-[hover]:bg-amber-400/15",
  yellow: "bg-yellow-400/20 text-yellow-700 group-data-[hover]:bg-yellow-400/30 dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-[hover]:bg-yellow-400/15",
  lime: "bg-lime-400/20 text-lime-700 group-data-[hover]:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-[hover]:bg-lime-400/15",
  green: "bg-green-500/15 text-green-700 group-data-[hover]:bg-green-500/25 dark:bg-green-500/10 dark:text-green-400 dark:group-data-[hover]:bg-green-500/20",
  emerald: "bg-emerald-500/15 text-emerald-700 group-data-[hover]:bg-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-400 dark:group-data-[hover]:bg-emerald-500/20",
  teal: "bg-teal-500/15 text-teal-700 group-data-[hover]:bg-teal-500/25 dark:bg-teal-500/10 dark:text-teal-300 dark:group-data-[hover]:bg-teal-500/20",
  cyan: "bg-cyan-400/20 text-cyan-700 group-data-[hover]:bg-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300 dark:group-data-[hover]:bg-cyan-400/15",
  sky: "bg-sky-500/15 text-sky-700 group-data-[hover]:bg-sky-500/25 dark:bg-sky-500/10 dark:text-sky-300 dark:group-data-[hover]:bg-sky-500/20",
  blue: "bg-blue-500/15 text-blue-700 group-data-[hover]:bg-blue-500/25 dark:text-blue-400 dark:group-data-[hover]:bg-blue-500/25",
  indigo: "bg-indigo-500/15 text-indigo-700 group-data-[hover]:bg-indigo-500/25 dark:text-indigo-400 dark:group-data-[hover]:bg-indigo-500/20",
  violet: "bg-violet-500/15 text-violet-700 group-data-[hover]:bg-violet-500/25 dark:text-violet-400 dark:group-data-[hover]:bg-violet-500/20",
  purple: "bg-purple-500/15 text-purple-700 group-data-[hover]:bg-purple-500/25 dark:text-purple-400 dark:group-data-[hover]:bg-purple-500/20",
  fuchsia: "bg-fuchsia-400/15 text-fuchsia-700 group-data-[hover]:bg-fuchsia-400/25 dark:bg-fuchsia-400/10 dark:text-fuchsia-400 dark:group-data-[hover]:bg-fuchsia-400/20",
  pink: "bg-pink-400/15 text-pink-700 group-data-[hover]:bg-pink-400/25 dark:bg-pink-400/10 dark:text-pink-400 dark:group-data-[hover]:bg-pink-400/20",
  rose: "bg-rose-400/15 text-rose-700 group-data-[hover]:bg-rose-400/25 dark:bg-rose-400/10 dark:text-rose-400 dark:group-data-[hover]:bg-rose-400/20",
  zinc: "bg-zinc-600/10 text-zinc-700 group-data-[hover]:bg-zinc-600/20 dark:bg-white/5 dark:text-zinc-400 dark:group-data-[hover]:bg-white/10"
};
function Badge({ color = "zinc", className, ...props2 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      ...props2,
      className: clsx(
        className,
        "inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline",
        colors[color]
      )
    }
  );
}
reactExports.forwardRef(function BadgeButton2({ color = "zinc", className, children, ...props2 }, ref) {
  let classes = clsx(
    className,
    "group relative inline-flex rounded-md focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500"
  );
  return "href" in props2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { ...props2, className: classes, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TouchTarget, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color, children }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(h, { ...props2, className: classes, ref, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TouchTarget, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color, children }) }) });
});
const { data } = window;
const props = JSON.parse(data);
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(WithoutRouterProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white", children: "Antoine Benevaut" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg leading-8 text-gray-900 dark:text-white", children: "All my websites, projects and opensource contributions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: props.projects.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  alt: post.title,
                  src: post.capture,
                  loading: "lazy",
                  className: "absolute inset-0 -z-10 h-full w-full"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("time", { dateTime: post.date, className: "mr-8", children: post.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "-ml-4 flex items-center gap-x-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 2 2", className: "-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: 1, cx: 1, cy: 1 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-x-2.5", children: post.brief })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold leading-6 text-white", children: post.url ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: post.url, target: post.target === void 0 ? "_blank" : void 0, rel: post.target === void 0 ? "noopener noreferrer" : void 0, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0" }),
                post.title
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0" }),
                post.title,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "red", className: "bg-black", children: "offline" })
              ] }) })
            ]
          },
          post.title
        )) })
      ]
    }
  ) }) })
);
//# sourceMappingURL=Home.js.map
