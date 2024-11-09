'use client'

import ReactDOM from 'react-dom/client'
import WithoutRouterProvider from "./Providers/WithoutRouterProvider.jsx";
import ScrollToHash from "./Components/scroll-to-hash.jsx";
import App from "./App.jsx";
import Markdown from "./Components/markdown.jsx";

const articleObject = window.article;

ReactDOM.createRoot(document.getElementById('root')).render(
    <WithoutRouterProvider>
      <App>
        <ScrollToHash />
        {
          articleObject
            ? <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none">
                  <Markdown article={ articleObject }/>
                </div>
              </div>
            : ''
        }
      </App>
    </WithoutRouterProvider>
)
