import React from 'react';
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
} from 'carbon-components-react/lib/components/UIShell';

const SiteHeader = ({
  isExpanded,
  onToggle,
}) => {
  const sideNavclassNames = classnames({
    'bx--side-nav--open': isExpanded,
  });
  
    return (
      <>
        <Header aria-label="Header">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onToggle}
          />
          <HeaderName prefix="IBM" to="/" element={Link}>
            Design
          </HeaderName>

          <HeaderNavigation aria-label="Navigation">
            <HeaderMenu aria-label="Approach">
              <HeaderMenuItem to="/approach" element={Link}>
                Overview
              </HeaderMenuItem>
              <HeaderMenuItem to="/approach/design-thinking" element={Link}>
                Design thinking
              </HeaderMenuItem>
              <HeaderMenuItem to="/approach/design-services" element={Link}>
                Design services
              </HeaderMenuItem>
              <HeaderMenuItem to="/approach/design-philosophy" element={Link}>
                Design philosophy
              </HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenuItem to="/teams" element={Link}>
              Teams
            </HeaderMenuItem>
            <HeaderMenuItem to="/practices" element={Link}>
              Practices
            </HeaderMenuItem>
            <HeaderMenuItem to="/impact" element={Link}>
              Impact
            </HeaderMenuItem>
          </HeaderNavigation>
        </Header>
        <SideNav aria-label="Navigation" className={sideNavclassNames}>
          <SideNavItems>
            <SideNavMenu title="Approach">
              <SideNavMenuItem to="/approach" element={Link}>
                Overview
              </SideNavMenuItem>
              <SideNavMenuItem to="/approach/design-thinking" element={Link}>
                Design thinking
              </SideNavMenuItem>
              <SideNavMenuItem to="/approach/design-services" element={Link}>
                Design services
              </SideNavMenuItem>
              <SideNavMenuItem to="/approach/design-philosophy" element={Link}>
                Design philosophy
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink to="/teams" element={Link}>
              Teams
            </SideNavLink>
            <SideNavLink to="/practices" element={Link}>
              Practices
            </SideNavLink>
            <SideNavLink to="/impact" element={Link}>
              Impact
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </>
    );
};

SiteHeader.propTypes = {
  /**
   * Specify whether the side navigation is expanded or collapsed
   */
  isExpanded: PropTypes.bool.isRequired,

  /**
   * Provide a function that is called when the toggle button is interacted
   * with. Useful for controlling the expansion state of the side navigation.
   */
  onToggle: PropTypes.func.isRequired,
};


export default SiteHeader;