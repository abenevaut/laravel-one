'use client'

import ReactDOM from 'react-dom/client'
import WithoutRouterProvider from "./Providers/WithoutRouterProvider.jsx";
import App from './App'
import { Button } from "@abenevaut/tailwindui/src/js/Catalyst/button.jsx";
import { Divider } from "@abenevaut/tailwindui/src/js/Catalyst/divider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <WithoutRouterProvider>
    <App>
      <div className="py-12">
        <div className="container">
          <div className="mx-auto lg:w-3/4">
            <div className="p-4 sm:p-6">

              <h2 className="pl-4 mb-1 -ml-4 text-xl font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Terms of Services</h2>

              <div className="flex items-center mb-5 font-medium text-black-600 text-md dark:text-white">
                <span className="inline-flex items-center">Last modified: 22 October 2022</span>
              </div>

              <h3
                className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10"
              >
                Introduction
              </h3>
              <p className="text-gray-900 dark:text-white">
                <a className="inline-block hover:underline" href="/">www.abenevaut.dev</a> est une plateforme d'information sur des sujets informatiques liés au développement et une plateforme de gestion de projets informatiques.
              </p>
              <br/>
              <p className="text-gray-900 dark:text-white">Aujourd'hui, l'activité de préstation informatique est close le site est néanmoins ouvert pour que les anciens clients puissent poursuivre la consultation de leurs archives.</p>
              <br/>
              <ul className="pl-6 list-disc sm:pl-8 dark:text-white">
                <li>Dénomination Sociale : Antoine Benevaut</li>
                <li>Raison Sociale : Profession libérale (close en date du 31/12/2017)</li>
                <li>Identification SIRET : 80352602900019</li>
                <li>Identification TVA : FR59803526029</li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <Divider/>

      <div className="flex flex-col items-center justify-center px-6 py-8 sm:flex-row">
        <h2
          className="mb-4 text-lg font-medium leading-tight text-center sm:text-left sm:mb-0 sm:leading-normal dark:text-white"
        >
          Read also the privacy policy
        </h2>
        <Button
          className="flex items-center px-4 py-2 text-sm sm:ml-6"
          href="/privacy.html"
        >
          Privacy policy
        </Button
        >
      </div>

    </App>
  </WithoutRouterProvider>,
)
