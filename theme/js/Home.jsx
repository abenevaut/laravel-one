'use client'

import ReactDOM from 'react-dom/client'
import WithoutRouterProvider from "./Providers/WithoutRouterProvider.jsx";
import App from "./App.jsx";
import { Badge } from "@abenevaut/tailwindui/src/js/Catalyst/badge.jsx";

const { data } = window;
const props = JSON.parse(data);

ReactDOM.createRoot(document.getElementById('root')).render(
    <WithoutRouterProvider>
      <App>
        <div
          // className="bg-white py-24 sm:py-32"
        >
          {/*<div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Antoine Benevaut
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-900 dark:text-white">
                All my websites, projects and opensource contributions
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              { props.projects.map((post) => (
                <article
                  key={ post.title }
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <img
                    alt={ post.title }
                    src={ post.capture }
                    loading="lazy"
                    className="absolute inset-0 -z-10 h-full w-full"
                    // className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={ post.date } className="mr-8">
                      { post.date }
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle r={ 1 } cx={ 1 } cy={ 1 }/>
                      </svg>
                      <div className="flex gap-x-2.5">
                        {/*<img loading="lazy" alt="" src={ post.author.imageUrl } className="h-6 w-6 flex-none rounded-full bg-white/10"/>*/}
                        { post.brief }
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    {
                      post.url
                        ? <a href={ post.url } target={ post.target === undefined ? "_blank" : undefined } rel={ post.target === undefined ? "noopener noreferrer" : undefined }>
                          <span className="absolute inset-0"/>
                          { post.title }
                        </a>
                        : <span>
                          <span className="absolute inset-0"/>
                          { post.title } <Badge color="red" className="bg-black">offline</Badge>
                        </span>
                    }
                  </h3>
                </article>
              )) }
            </div>
          {/*</div>*/}
        </div>

        {/*<div className="flex flex-col items-center justify-center px-6 py-8 sm:flex-row">*/ }
        {/*  <h2 className="mb-4 text-lg text-white font-medium leading-tight text-center sm:text-left sm:mb-0 sm:leading-normal">All my opensource projects</h2>*/ }
        {/*  <a className="flex items-center px-4 py-2 text-sm font-bold text-white uppercase bg-white bg-opacity-0 border border-white border-solid sm:ml-6 border-opacity-10 hover:border-opacity-20 hover:bg-opacity-1" href="https://github.com/abenevaut/opensource" role="button" target="_blank">*/ }
        {/*    Github*/ }
        {/*  </a>*/ }
        {/*</div>*/ }
      </App>
    </WithoutRouterProvider>
)
