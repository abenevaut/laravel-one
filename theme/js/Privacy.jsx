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

              <h2 className="pl-4 mb-1 -ml-4 text-xl font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Privacy</h2>

              <div className="flex items-center mb-5 font-medium text-md">
                <span className="inline-flex items-center dark:text-white">Last modified: 22 October 2022</span>
              </div>

              <p className="text-gray-900 dark:text-white">
                Dans le cadre de son activité, la société <a className="inline-block hover:underline" href="/">www.abenevaut.dev</a>, est amenée à collecter et à traiter des informations dont certaines sont qualifiées de "données personnelles". <a className="inline-block hover:underline" href="/">www.abenevaut.dev</a> attache une grande importance au respect de la vie privée, et n’utilise que des données de manière responsable et confidentielle et dans une finalité précise.
              </p>
              <br/>

              <div id='ppms_cm_privacy_settings' data-editor-centralize='true' data-main-container='true' data-root='true'>
                <div data-disable-select='true'>
                    <h3
                      id='ppms_cm_privacy_settings_form_link_header_id'
                      className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10"
                    >
                      Privacy settings
                    </h3>
                    <p className='dark:text-white' id='ppms_cm_privacy_settings_form_link_text_id'>
                      We collect and process your data on this site to better understand how it is used. We always ask
                      you for consent to do that. You can change your privacy settings here.
                    </p>
                    <Button
                      className="flex items-center px-4 py-2 text-sm mt-2"
                      id='ppms_cm_privacy_settings_button'
                    >
                      Manage settings
                    </Button>
                </div>
              </div>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Données personnelles</h3>
              <p className="text-gray-900 dark:text-white">
                Sur le site web <a className="inline-block hover:underline" href="/">www.abenevaut.dev</a>, il y a 2 types de données susceptibles d’être recueillies :
              </p>
              <br/>
              <ul className="pl-6 list-disc sm:pl-8 dark:text-white">
                <li>
                  <b>Les données transmises directement</b>
                  <br/>
                  Ces données sont celles que vous nous transmettez directement, via un formulaire de création de compte utilisateur, de contact ou bien par contact direct par email. Sont obligatoires dans le formulaire de contact le champs « civilité, prénom et nom » et « email ».
                </li>
                <li>
                  <b>Les données collectées automatiquement</b>
                  <br/>
                  Lors de vos visites, une fois votre consentement donné, nous pouvons recueillir des informations de type « web analytics » relatives à votre navigation, la durée de votre consultation, votre adresse IP, votre type et version de navigateur. La technologie utilisée est le cookie.
                </li>
              </ul>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Utilisation des données</h3>
              <p className="text-gray-900 dark:text-white">
                Les données que vous nous transmettez directement sont utilisées dans le but de :
              </p>
              <br/>
              <ul className="pl-6 list-disc sm:pl-8 dark:text-white">
                <li>vous re-contacter et/ou dans le cadre de la demande que vous nous faites via notre formulaire de contact ou par courriel</li>
                <li>de personnaliser l'interface <a className="inline-block hover:underline" href="/">www.abenevaut.dev</a> pour une experience utilisateur optimale
                </li>
              </ul>
              <br/>
              <p className="text-gray-900 dark:text-white">
                Les données « web analytics » sont collectées sous forme anonyme (en enregistrant des adresses IP anonymes) par Piwik PRO, et nous permettent de mesurer l'audience de notre site web, les consultations et les éventuelles erreurs afin d’améliorer constamment l’expérience des utilisateurs. Ces données sont utilisées par <a className="inline-block hover:underline" href="/">www.abenevaut.dev</a>, responsable du traitement des données, et ne seront jamais cédées à un tiers ni utilisées à d’autres fins que celles détaillées ci-dessus.
              </p>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Base légale</h3>
              <p className="text-gray-900 dark:text-white">Les données personnelles ne sont collectées qu’après consentement obligatoire de l’utilisateur. Ce consentement est valablement recueilli (boutons et cases à cocher), libre, clair et sans équivoque.</p>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Durée de conservation</h3>
              <p className="text-gray-900 dark:text-white">Les données seront sauvegardées durant une durée maximale de 3 ans.</p>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Cookies</h3>
              <p className="text-gray-900 dark:text-white">
                Les cookies sont des fichiers texte placés sur votre ordinateur, pour aider le site internet à analyser l’utilisation du site par ses utilisateurs. <a className="inline-block hover:underline" href="https://wikis.ec.europa.eu/display/WEBGUIDE/04.+Cookies#section_2">Loi sur les cookies</a>.
              </p>
              <br/>
              <p className="text-gray-900 dark:text-white">
                Voici la liste des cookies utilisées et leur objectif :
              </p>
              <br/>
              <ul className="pl-6 list-disc sm:pl-8 dark:text-white">
                <li>Cookies Piwik PRO (<a className="inline-block hover:underline" href="https://help.piwik.pro/support/privacy/cookies-created-by-piwik-pro/">liste exhaustive</a>) : Web analytics, un service d’analyse de site internet fourni par Piwik PRO.
                </li>
              </ul>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Vos droits concernant les données personnelles</h3>
              <p className="text-gray-900 dark:text-white">Vous avez le droit de consultation, demande de modification ou d’effacement sur l’ensemble de vos données personnelles. Vous pouvez également retirer votre consentement au traitement de vos données.</p>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Contact délégué à la protection des données</h3>
              <p className="text-gray-900 dark:text-white">Antoine Benevaut - <a className="inline-block hover:underline" href="mailto:contact@abenevaut.dev">contact@abenevaut.dev</a>
              </p>
              <br/>

              <h3 className="pl-4 -ml-4 font-medium border-l-2 sm:pl-6 sm:-ml-6 dark:text-white border-zinc-950/10 dark:border-white/10">Hébergement web</h3>
              <p className="text-gray-900 dark:text-white">Github pages: <a className="inline-block hover:underline" href="https://pages.github.com">pages.github.com</a>
              </p>

            </div>
          </div>
        </div>
      </div>

      <Divider/>

      <div className="flex flex-col items-center justify-center px-6 py-8 sm:flex-row">
        <h2
          className="mb-4 text-lg font-medium leading-tight text-center sm:text-left sm:mb-0 sm:leading-normal dark:text-white"
        >
          Read also the terms of services
        </h2>
        <Button
          className="flex items-center px-4 py-2 text-sm sm:ml-6"
          href="/terms.html"
        >
          Terms of Services
        </Button>
      </div>

    </App>
  </WithoutRouterProvider>,
)
