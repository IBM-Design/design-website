import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Link } from 'carbon-components-react';
import { ArrowRight16, Launch20 } from '@carbon/icons-react';

export default class InfoTile extends React.Component {
  static propTypes = {
    no_gutter: PropTypes.bool,
     //if true, will set margin bottom to 0 so tiles will touch
    button: PropTypes.bool,
    //if true, will include clickable tile
    button_href: PropTypes.string,
    //clickable tile href
    img_src: PropTypes.string,
    //src for img
    img_alt: PropTypes.string,
    //alt text for img
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
    light: PropTypes.boolean
    //if true, makes description and title_two text white, else black (based on bg color)
  };

  render() {
    const {
      no_gutter,
      button,
      button_href,
      img_src,
      img_alt,
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
      'ibm--col-lg-4': type === 'small',
      'ibm--row': type === 'large' || type === 'xlarge',
      'tile--sm': type === 'small',
      'tile--lg': type === 'large',
      'tile--xl': type === 'xlarge',
      'tile--no-gutter': no_gutter === 'true',

    });

    const imgClassNames = classnames({
      'img--sm': type === 'small',
      'img--lg': type === 'large',
      'img--xl': type === 'xlarge',
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

    return (
      <div className={classNames} style={{backgroundColor: background}}>
        { type === "small" ? (
          <img
            className={imgClassNames}
            src={img_src}
            alt={img_alt}/>
        ) : null}
        <section className='tile--text-container ibm--col-sm-4'>
          <h1 className={titleClassNames}>{tile_title_one}</h1>
          {tile_title_two ? (
            <h1 className={titleTwoClassNames}>{tile_title_two}</h1>
          ) : null}
          <p className={descClassName}>{description}</p>
          {!link_two ?
            (
              <div className='arrow--link-container'>
                <Link href={href_one}>{link_one}</Link>
                <ArrowRight16/>
              </div>
            ) : null}
          {button ? (
            <Button className='tile--button'>
              <span>Start Using</span>
              <Launch20/>
            </Button>
          ) : null}
        </section>
        { type !== "small" ? (
          <div className="ibm--col-lg-8 ibm--col-sm-4 tile-img--container">
            <img
              className={imgClassNames}
              src={img_src}
              alt={img_alt}/>
          </div>
        ) : null}
      </div>
    );
  }
}
