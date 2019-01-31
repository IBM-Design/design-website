import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default class BackLink extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    /**
     * Specify where link should go
     */
    to: PropTypes.shape,
  };

  render() {
    const { children, to } = this.props;

    return (
      <div className="background back-link">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-lg-16">
              <p>
                <Link to={to} className="bx--link">
                  <Icon name="PlexArrowLeft" color="blue" />
                  {children}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
