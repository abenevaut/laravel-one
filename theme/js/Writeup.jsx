'use client'

import ReactDOM from 'react-dom/client'
import WithoutRouterProvider from "./Providers/WithoutRouterProvider.jsx";
import App from "./App.jsx";
import ContentSectionWithTestimonialAndStats from "./Components/content-section-with-testimonial-and-stats.jsx";
import ScrollToHash from "./Components/scroll-to-hash.jsx";
import Markdown from "./Components/markdown.jsx";

const articleObject = JSON.parse(window.article);
const writeupObject = window.writeup;

ReactDOM.createRoot(document.getElementById('root')).render(
    <WithoutRouterProvider>
      <App>
        <ScrollToHash />
        <ContentSectionWithTestimonialAndStats
          contentCategory={ articleObject.contentCategory }
          contentTitle={ articleObject.contentTitle }
          contentBody={ <div dangerouslySetInnerHTML={ { __html: articleObject.contentBody } }/> }
          caption={ articleObject.caption }
          captionImage={ articleObject.captionImage }
          stats={ articleObject.stats }
          outlink={ articleObject.outlink }
          outlinkTitle={ articleObject.outlinkTitle }
        />
        {
          writeupObject
            ? <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none">
                  <Markdown article={ writeupObject }/>
                </div>
              </div>
            : ''
        }
      </App>
    </WithoutRouterProvider>
)
