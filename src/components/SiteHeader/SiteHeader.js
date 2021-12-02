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
import { Close20 } from '@carbon/icons-react';

const appSwitcher20 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 30 72"
    viewBox="0 0 30 72"
    width="20"
    height="20"
    viewBox="0 0 20 20">
    <path
      fill="white"
      d="M15.5 15.5H18V18h-2.5zm-6.75 0h2.5V18h-2.5zM2 15.5h2.5V18H2zm13.5-6.75H18v2.5h-2.5zm-6.75 0h2.5v2.5h-2.5zM2 8.75h2.5v2.5H2zM15.5 2H18v2.5h-2.5zM8.75 2h2.5v2.5h-2.5zM2 2h2.5v2.5H2z"
    />
  </svg>
);

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
                <HeaderMenu aria-label="Impact" className={approachClassName}>
                  <HeaderMenuItem to="/impact/" element={Link}>
                    Overview
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    to="/impact/abd/"
                    element={Link}>
                    America by Design
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    to="/impact/think/"
                    element={Link}>
                    Think
                  </HeaderMenuItem>
                 
                </HeaderMenu>
                <HeaderMenuItem href="https://www.ibm.com/employment/#jobs?job-category=Design">
                    Open roles
                </HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction
                  className="bx--header__action--switcher"
                  aria-label="Switch"
                  onClick={onToggleSwitcher}>
                  {isSwitcherExpanded ? (
                    <Close20 />
                  ) : (
                    <div>{appSwitcher20}</div>
                  )}
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
                <SideNavMenu
                  title="Impact"
                  defaultExpanded={approachActive ? true : false}>
                  <SideNavMenuItem to="/impact/" element={Link}>
                    Overview
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    to="/impact/abd/"
                    element={Link}>
                    America by Design
                  </SideNavMenuItem>
                  <SideNavMenuItem
                    to="/impact/think/"
                    element={Link}>
                    Think
                  </SideNavMenuItem>
                </SideNavMenu>
              </SideNavItems>
            </SideNav>
            <WebsiteSwitcher
              role="navigation"
              aria-label="Site switcher"
              isSwitcherOpen={isSwitcherExpanded}
              links={[
                {
                  href: 'https://ibm.com/brand',
                  linkText: 'IBM Brand Center',
                },
                {
                  href: 'https://www.ibm.com/design/language/',
                  linkText: 'IBM Design Language',
                },
                {
                  href: 'https://www.carbondesignsystem.com',
                  linkText: 'Carbon Design System',
                },
                {
                  href: 'https://www.ibm.com/standards/carbon/',
                  linkText: 'Carbon for IBM.com',
                },
                {
                  href: 'https://www.ibm.com/design/event/',
                  linkText: 'IBM Event Design',
                },
                {
                  href: 'https://www.ibm.com/design/workplace/',
                  linkText: 'IBM Workplace Design',
                },
                {
                  href: 'https://www.ibm.com/design/thinking/',
                  linkText: 'Enterprise Design Thinking',
                },
                {
                  href: 'https://www.ibm.com/able/',
                  linkText: 'IBM Accessibility',
                },
                {
                  href: 'https://www.ibm.com/design/ai/',
                  linkText: 'IBM Design for AI',
                },
                {
                  href: 'https://www.ibm.com/design/research/',
                  linkText: 'IBM Design Research',
                },
                {
                  href: 'https://www.ibm.com/services/ibmix/',
                  linkText: 'IBM iX',
                },
                {
                  href: 'https://w3.ibm.com/design/experience-standards/',
                  linkText: 'IBM Experience Standards',
                },
                {
                  href: 'https://w3.ibm.com/design/',
                  linkText: 'IBM Design',
                },
                {
                  href: 'https://www.ibm.com/design/racial-equity-in-design',
                  linkText: 'Racial Equity in Design',
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
