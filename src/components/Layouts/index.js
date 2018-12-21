import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';

import favicon32 from '../../content/global/images/favicon-32.png';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
import { WebsiteFooter } from '@carbon/addons-website';
import Navigation from '../Navigation';

import '../../styles/index.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    isOpen: false,
    isFinal: false,
  };

  componentDidMount() {
    this.checkWidth();
  }

  onToggleBtnClick = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
      setTimeout(() => {
        this.setState({
          isFinal: true,
        });
      }, 5);
    } else {
      this.setState({
        isFinal: false,
      });
      setTimeout(() => {
        this.setState({
          isOpen: true,
        });
      }, 5);
    }
  };

  handleClose = evt => {
    let isTarget = false;
    // `<svg>` in IE11 does not have `.classList`
    if (
      evt.target.classList &&
      evt.target.classList.contains('main-nav-item__heading') &&
      evt.target.classList.contains('main-nav-item__list')
    ) {
      isTarget = true;
    }
    const isSmallerScreen = window.innerWidth < 1056 || screen.width < 1056;
    if (!isTarget && isSmallerScreen) {
      this.setState({
        isOpen: false,
      });
    }
  };

  clickToClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  checkWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width < 1056) {
        this.setState({
          isOpen: false,
        });
      }

      document.addEventListener('keydown', evt => {
        if (evt.which === 27 && this.state.isOpen) {
          this.setState({
            isOpen: false,
          });
        }
      });
    }
  };

  render() {
    const { children } = this.props;
    const currentYear = new Date().getFullYear();
    const lastUpdated = 'December 19, 2018';

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.',
                },
                {
                  name: 'keywords',
                  content:
                    'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
                },
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: `${favicon32}`,
                },
              ]}>
              <html lang="en" />
            </Helmet>
            <Header aria-label="Header">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={this.onToggleBtnClick}
              />
              <HeaderName prefix="IBM" to="/" element={Link}>
                Design
              </HeaderName>
              <Navigation location={this.props.location} />
              
            </Header>

            

            <div className="container">
              {children}
              <WebsiteFooter
                logoOffset={false}
                linksCol1={[
                  { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
                  {
                    href: 'https://www.ibm.com/legal',
                    linkText: 'Terms of Use',
                  },
                  { href: 'https://www.ibm.com', linkText: 'IBM.com' },
                ]}
                linksCol2={[
                  {
                    href: 'https://twitter.com/ibmdesign',
                    linkText: 'Twitter',
                  },
                  {
                    href: 'https://facebook.com/ibmdesign',
                    linkText: 'Facebook',
                  },
                ]}>
                <p>
                  Have questions? Email us or open an issue in{' '}
                  <a
                    href="https://github.com/IBM-Design/design-website/issues/new"
                    target="_blank">
                    GitHub.
                  </a>
                </p>
                <p>
                  Last updated {lastUpdated}
                  <br />
                  Copyright © {currentYear} IBM
                </p>
              </WebsiteFooter>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
