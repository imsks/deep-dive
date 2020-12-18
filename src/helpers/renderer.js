import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import { Helmet } from 'react-helmet';
import Routes from '../client/Routes';
import webConfig from '../../webConfig.json';

export default (req, context) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    )
  );

  const helmet = Helmet.renderStatic();
  const styles = sheet.getStyleTags();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large"
        />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styles}
        <link rel="shortcut icon" href="${webConfig.siteURL}/assets/images/favicon.png">
        <link rel="stylesheet" href="${webConfig.siteURL}/assets/css/styles.min.css">
    </head>
            <body>
                <div id="root">${content}</div>
                <script src="/bundle.js"></script>
            </body>
    </html>`;
};
