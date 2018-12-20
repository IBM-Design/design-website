import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Link } from 'carbon-components-react';
import { ArrowRight16, Launch20 } from '@carbon/icons-react';

export default class Tile extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    //for tile images
    no_gutter: PropTypes.string,
     //if true, will set margin bottom to 0 so tiles will touch
    button: PropTypes.string,
    //if true, will include clickable tile
    button_href: PropTypes.string,
    //clickable tile href
    type: PropTypes.string,
    //"small", "large", "xlarge" specifies the version of tile component used
    tile_title_one: PropTypes.string,
    //name of title
    tile_title_two: PropTypes.string,
    //for large tiles, second title text
    description: PropTypes.string,
    //paragraph
    link_one: PropTypes.string,
    //label for link
    link_two: PropTypes.string,
    //if more than one link, label for second link
    link_three: PropTypes.string,
    //if more than one link, label for third link
    href_one: PropTypes.string,
    //url for first link_one
    href_two: PropTypes.string,
    //url for first link_two
    href_three: PropTypes.string,
    //url for first link_three
    background: PropTypes.string,
    //string that sets hex value for background color
    light: PropTypes.string
    //if true, makes description and title_two text white, else black (based on bg color)
  };

  render() {
    const {
      children,
      no_gutter,
      button,
      button_href,
      type,
      tile_title_one,
      tile_title_two,
      description,
      link_one,
      link_two,
      link_three,
      href_one,
      href_two,
      href_three,
      background,
      light,
    } = this.props;

    const classNames = classnames({
      'ibm--row': type === 'large' || type === 'xlarge',
      'tile--sm': type === 'small',
      'tile--lg': type === 'large',
      'tile--xl': type === 'xlarge',
      'tile--no-gutter': no_gutter === 'true',

    });

    const titleClassNames = classnames({
      'title--sm': type === 'small',
      'title--lg': type === 'large' || type === 'xlarge',
    });

    const titleTwoClassNames = classnames({
      'text--light': light,
      'title--two': tile_title_two
    });

    const descClassName = classnames({
      'text--light': light,
    });

    const lgImgClassNames = classnames({
      'ibm--col-lg-8': type === 'large',
      'ibm--col-lg-16': type === 'xlarge',
      'ibm--col-sm-4 img--lg': type === 'large' || type === 'xlarge',
    });

    return (
      <div className={classNames} style={{backgroundColor: background}}>
        { type === "small" ? (
          <div className='img--sm'>
            {children}
          </div>
        ) : null}
        <section className='tile--text-container ibm--col-sm-4'>
          <h1 className={titleClassNames}>{tile_title_one}</h1>
          {tile_title_two ? (
            <h1 className={titleTwoClassNames}>{tile_title_two}</h1>
          ) : null}
          <p className={descClassName}>{description}</p>
          {!link_two && link_one ?
            (
              <div className='arrow--link-container'>
                <Link href={href_one}>{link_one}</Link>
                <ArrowRight16/>
              </div>
            ) : null}
          {button === 'true' ? (
            <Button className='tile--button'>
              <span>Start Using</span>
              <Launch20/>
            </Button>
          ) : null}
        </section>
        { type !== "small" ? (
          <div className={lgImgClassNames}>
            {children}
          </div>
        ) : null}
      </div>
    );
  }
}
