import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = ({ route }) => {
  return (
    <div>
      <Navbar />
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};
