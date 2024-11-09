import { j as jsxRuntimeExports, c as clsx } from "./App2.js";
function Divider({ soft = false, className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "hr",
    {
      role: "presentation",
      ...props,
      className: clsx(
        className,
        "w-full border-t",
        soft && "border-zinc-950/5 dark:border-white/5",
        !soft && "border-zinc-950/10 dark:border-white/10"
      )
    }
  );
}
export {
  Divider as D
};
//# sourceMappingURL=divider.js.map
