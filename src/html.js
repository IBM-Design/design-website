import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      window.digitalData = {
        page: {
          category: {
            primaryCategory: 'SB03',
          },
          pageInfo: {
            effectiveDate: '2019-01-01',
            expiryDate: '2099-01-01',
            language: 'en-US',
            publishDate: '2019-02-01',
            publisher: 'IBM Corporation',
            version: 'v1',
            ibm: {
              contentDelivery: 'ECM/Filegen',
              contentProducer:
                'ECM/IConS Adopter ## - #synkey# - 11/19/2014 05:14:00 PM',
              country: 'US',
              industry: '______',
              owner: 'Alison Joseph/Austin/IBM',
              owningPortal: '______',
              siteID: '______',
              subject: '______',
              type: 'CT###',
            },
          },
        },
      };
    }

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
          <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0/dist/smooth-scroll.polyfills.min.js" />

          <script
            src="https://www.ibm.com/common/stats/ida_stats.js"
            type="text/javascript"
          />
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
