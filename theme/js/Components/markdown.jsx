export default function Markdown({ article }) {
  return (
    <article className="
      max-w-none
      prose prose-base dark:prose-invert
      prose-headings:no-underline
      prose-headings:text-gray-900 prose-headings:dark:text-white
      prose-a:no-underline
      prose-a:text-abenevaut-500 prose-a:dark:text-abenevaut-600
      hover:prose-a:text-abenevaut-600 hover:prose-a:dark:text-abenevaut-500
      prose-p:text-gray-900 prose-p:dark:text-white
      prose-li:text-gray-900 prose-li:dark:text-white
    ">
      <div dangerouslySetInnerHTML={ { __html: article } }/>
    </article>
  );
}
