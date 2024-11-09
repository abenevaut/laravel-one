import { BrowserRouter as Router } from 'react-router-dom';
import { RouterProvider } from '@abenevaut/tailwindui/src/js/Contexts/RouterContext';
import PropTypes from "prop-types";

const WithoutRouterProvider = ({ children }) => {
  const routerValue = {
    navigate: (path) => {
      // Utiliser navigate dans les composants enfants
      // Ce sera défini dans le composant RouterProvider
    },
  };

  return (
    <Router>
      <RouterProvider value={routerValue}>
        {children}
      </RouterProvider>
    </Router>
  );
};
WithoutRouterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithoutRouterProvider;
