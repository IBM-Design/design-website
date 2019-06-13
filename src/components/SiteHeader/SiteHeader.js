import React from 'react';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'gatsby';
import {
  SkipToContent,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  SideNav,
  SideNavMenu,
  SideNavLink,
  SideNavMenuItem,
  SideNavItems,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { WebsiteSwitcher } from '@carbon/addons-website';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';

const SiteHeader = ({
  isNavExpanded,
  onToggleNav,
  onToggleSwitcher,
  isSwitcherExpanded,
}) => {
  return (
    <Location>
      {({ location }) => {
        const sideNavclassNames = classnames({
          'bx--side-nav--open': isNavExpanded,
          'bx--side-nav--website': true,
          'bx--side-nav--website--with-header-nav': true,
        });

        // this is super hacky and not scaleable - TODO update to pull in nav from json file similar to carbon site
        const approachActive = location.pathname.includes('approach');

        const approachClassName = classnames({
          'submenu--active': approachActive,
        });

        return (
          <>
            <Header aria-label="Header" className="bx--header--website">
              <SkipToContent />
              <HeaderMenuButton
                className="bx--header__action--menu"
                aria-label="Open menu"
                onClick={onToggleNav}
                isActive={isNavExpanded}
              />
              <HeaderName prefix="IBM" to="/" element={Link}>
                Design
              </HeaderName>

              <HeaderNavigation aria-label="Main Navigation">
                <HeaderMenu aria-label="Approach" className={approachClassName}>
                  <HeaderMenuItem to="/approach/" element={Link}>
                    Overview
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    to="/approach/design-philosophy/"
                    element={Link}>
                    Design philosophy
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    to="/approach/design-thinking/"
                    element={Link}>
                    Design thinking
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    to="/approach/design-services/"
                    element={Link}>
                    Design services
                  </HeaderMenuItem>
                </HeaderMenu>
                <HeaderMenuItem to="/teams/" element={Link}>
                  Teams
                </HeaderMenuItem>
                <HeaderMenuItem to="/practices/" element={Link}>
                  Practices
                </HeaderMenuItem>
                <HeaderMenuItem to="/impact/" element={Link}>
                  Impact
                </HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction
                  className="bx--header__action--switcher"
                  aria-label="Switch"
                  onClick={onToggleSwitcher}>
                  {isSwitcherExpanded ? <Close20 /> : <AppSwitcher20 />}
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>
            <SideNav
              aria-label="Mobile Navigation"
              className={sideNavclassNames}>
              <SideNavItems>
                <SideNavMenu
                  title="Approach"
                  defaultExpanded={approachActive ? true : false}>
                  <SideNavMenuItem to="/approach/" element={Link}>
                    Overview
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    to="/approach/design-philosophy/"
                    element={Link}>
                    Design philosophy
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    to="/approach/design-thinking/"
                    element={Link}>
                    Design thinking
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    to="/approach/design-services/"
                    element={Link}>
                    Design services
                  </SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink to="/teams/" element={Link}>
                  Teams
                </SideNavLink>
                <SideNavLink to="/practices/" element={Link}>
                  Practices
                </SideNavLink>
                <SideNavLink to="/impact/" element={Link}>
                  Impact
                </SideNavLink>
              </SideNavItems>
            </SideNav>
            <WebsiteSwitcher
              role="navigation"
              aria-label="Site switcher"
              isSwitcherOpen={isSwitcherExpanded}
              links={[
                { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
                {
                  href: 'https://www.ibm.com/design/language/',
                  linkText: 'IBM Design Language',
                },
                {
                  href: 'https://www.ibm.com/design/brand/',
                  linkText: 'IBM Brand Center',
                },
                {
                  href: 'https://www.carbondesignsystem.com',
                  linkText: 'Product',
                },
                {
                  href: 'https://www.ibm.com/standards/web/',
                  linkText: 'Digital',
                },
                {
                  href: 'https://www.ibm.com/design/thinking/',
                  linkText: 'IBM Enterprise Design Thinking',
                },
                {
                  href: 'https://www.ibm.com/design/research/',
                  linkText: 'IBM Design Research',
                },
                {
                  href: 'https://www.ibm.com/design/ai/',
                  linkText: 'IBM Design for AI',
                },
                {
                  href: 'https://www.ibm.com/services/ibmix/',
                  linkText: 'IBM iX',
                },
              ]}
            />
          </>
        );
      }}
    </Location>
  );
};

SiteHeader.propTypes = {
  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isNavExpanded: PropTypes.bool.isRequired,

  /**
   * Specify whether the switcher is expanded or collapsed
   */
  isSwitcherExpanded: PropTypes.bool.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggleNavNav: PropTypes.func.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the switcher.
   */
  onToggleSwitcher: PropTypes.func.isRequired,
};

export default SiteHeader;
