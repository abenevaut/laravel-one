'use client'

import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WithoutRouterProvider from './Providers/WithoutRouterProvider.jsx';
import App from './App';
import Projects from './Components/Projects';

const { data } = window;
const props = JSON.parse(data);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <WithoutRouterProvider>
    <QueryClientProvider client={client}>
      <App>
        <div className="py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">About me</h2>
              <p className="mt-2 text-lg leading-8 text-black-600">
                Mon parcours. Mes compétences. Mes passions.
              </p>
            </div>


            <Projects />

          </div>
        </div>
      </App>
    </QueryClientProvider>
  </WithoutRouterProvider>,
)
