import React from 'react';
import { Location } from '@reach/router';
import classnames from 'classnames';
import NavItem from './NavItem';
import navigation from '../../data/navigation/navigation.json';

import {
  HeaderNavigation
} from 'carbon-components-react/lib/components/UIShell';

export default class Navigation extends React.Component {
  renderNavItems = (nav, loc) =>
    Object.keys(nav).map(item => {
      return (
        <NavItem
          itemSlug={item}
          item={nav[item]}
          key={item}
          location={loc}
        />
      );
    });

  render() {
    const { isOpen, isFinal } = this.props;

    const classNames = classnames('side-nav', {
      'side-nav__closed': !isOpen,
      'side-nav__closed--final': isFinal && !isOpen,
    });

    const classNamesClickToClose = classnames({
      'side-nav-click-to-close': true,
      'side-nav-click-to-close__closed': !isOpen,
      'side-nav-click-to-close__closed--final': isFinal && !isOpen,
    });

    return (
      <Location>
        {({ location }) => {
          const navItems = this.renderNavItems(navigation, location);
          return (
            <>
              <div
                className={classNamesClickToClose}
                onClick={() => {
                  this.props.clickToClose();
                }}
              />
              <HeaderNavigation aria-label="IBM [Platform]" className={classNames}>
                {navItems}
              </HeaderNavigation>
            </>
          );
        }}
      </Location>
    );
  }
}
