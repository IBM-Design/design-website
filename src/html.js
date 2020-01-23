import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if(!window) window = {};
            window.digitalData = {
              page: {
                category: {
                  primaryCategory: 'DESIGN',
                },
                pageInfo: {
                  productTitle: 'IBM Design',
                  ibm: {
                    siteID: 'DESIGN',
                    country: 'US',
                    industry: 'Design',
                    owner: 'Alison Joseph/Austin/IBM',
                  },
                },
              },
            }
          `,
            }}
          />
          <script
            src="https://1.www.s81c.com/common/stats/ida_stats.js"
            type="text/javascript"
            async
          />
          <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0/dist/smooth-scroll.polyfills.min.js" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript>This website requires JavaScript.</noscript>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
