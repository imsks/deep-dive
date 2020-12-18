import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
// imports for themes and styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style-components/global';
import { lightTheme } from './style-components/theme';

const App = ({ route }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {renderRoutes(route.routes)}
    </ThemeProvider>
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
