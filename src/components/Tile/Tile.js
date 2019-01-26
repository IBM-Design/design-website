import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ClickableTile } from 'carbon-components-react';
import { ArrowRight24, ArrowUpRight24 } from '@carbon/icons-react';
import Fade from 'react-reveal/Fade';

export default class Tile extends React.Component {
  static propTypes = {
    /**
     * for tile images
     */
    children: PropTypes.node,

    /**
     * tile title
     */
    title: PropTypes.string,

    /**
     * optional secondary text for tile
     */
    caption: PropTypes.string,

    /**
     * href for external links
     */
    href: PropTypes.string,

    /**
     * default to false, show dark clickable tile
     */
    dark: PropTypes.string,

    /**
     * default to false, display as feature tile, with text options
     */
    feature: PropTypes.string,

    /**
     * feature heading, only displas if feature is true
     */
    feature_heading: PropTypes.string,

    /**
     * feature heading, only displas if feature is true
     */
    feature_heading_secondary: PropTypes.string,

    /**
     * feature description, only displas if feature is true
     */
    feature_description: PropTypes.string,

    /**
     * feature style, default or alt
     */
    feature_style: PropTypes.string,
  };

  render() {
    const {
      children,
      caption,
      title,
      href,
      dark,
      feature,
      feature_heading,
      feature_heading_secondary,
      feature_description,
      feature_background,
      feature_style,
    } = this.props;

    const classNames = classnames({
      tile: true,
      'tile--dark': dark === 'true',
      'tile--feature': (feature_style === 'default') & (feature === 'true'),
      'tile--feature--alt': (feature_style === 'alt') & (feature === 'true'),
    });

    const backgroundClassnames = classnames({
      tile_background: true,
      'tile__feature-content': feature_style === 'default',
      'background--black': feature_background === 'black',
      'background--white': feature_background === 'white',
      'background--gray-10': feature_background === 'gray-10',
      'background--gray-20': feature_background === 'gray-20',
      'background--gray-80': feature_background === 'gray-80',
      'background--gray-100': feature_background === 'gray-100',
      'background--inverse':
        feature_background === 'gray-100' ||
        feature_background === 'gray-80' ||
        feature_background === 'black',
    });

    const clickTileClassNames = classnames({
      'bx--tile--clickable--dark': dark === 'true',
    });

    if (feature_heading !== null) {
      const featureId = feature_heading
        .replace(/[:&]/g, '')
        .toLowerCase()
        .split(' ')
        .join('-');
    }

    const clickableTile = (
      <ClickableTile
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={clickTileClassNames}>
        <div className="bx--aspect-ratio bx--aspect-ratio--2x1">
          <div className="bx--aspect-ratio--object">
            <h3 className="tile__title">{title}</h3>
            {caption ? <p className="tile__caption">{caption}</p> : null}
            <div className="tile__link-icon">
              {(feature === 'true') & (feature_style === 'alt') ? (
                <ArrowRight24 aria-label={`Open ${title}`} />
              ) : (
                <ArrowUpRight24 aria-label={`Open ${title}`} />
              )}
            </div>
          </div>
        </div>
      </ClickableTile>
    );

    if ((feature === 'true') & (feature_style === 'default')) {
      return (
        <Fade bottom distance="10%">
          <div className={classNames}>
            <div className={backgroundClassnames}>
              <h2 className="bx--type-expressive-paragraph-01" id={featureId}>
                {feature_heading}
              </h2>
              {clickableTile}
            </div>
            <div className="tile__feature-img">{children}</div>
          </div>
        </Fade>
      );
    }

    if ((feature === 'true') & (feature_style === 'alt')) {
      return (
        <Fade bottom distance="10%">
          <div className="ibm--grid tile-grid">
            <div className={classNames}>
              <div className={backgroundClassnames}>
                <div className="ibm--col-lg-4 ibm--offset-lg-1 ibm--col-md-3">
                  <h2
                    className="bx--type-expressive-paragraph-01"
                    id={featureId}>
                    <strong>{feature_heading}</strong>
                    {feature_heading_secondary}
                  </h2>
                  <p className="page-p">{feature_description}</p>
                </div>
                <div className="ibm--col-lg-8 ibm--col-md-4 ibm--offset-md-1 ibm--offset-lg-3 tile__feature-img">
                  {children}
                </div>
              </div>
              {clickableTile}
            </div>
          </div>
        </Fade>
      );
    }

    return (
      <Fade bottom distance="10%">
        <div className={classNames}>
          <div className="tile__img">{children}</div>
          {clickableTile}
        </div>
      </Fade>
    );
  }
}

Tile.defaultProps = {
  title: '',
  dark: 'false',
  feature: 'false',
  href: '',
  feature_style: 'default',
  feature_heading: '',
};
