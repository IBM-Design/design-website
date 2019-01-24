import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';

export default class Carousel extends React.Component {
  static propTypes = {
    /**
     * for slide images
     */
    children: PropTypes.node,
  };

  onChange = e => {
    const slide = document.querySelector('.ibm--carousel-slide');
    const images = slide.querySelectorAll('img');

    images.forEach(img => {
      img.style.transform = `translate(${e * -100 + 100}%, 0)`;
    });
  };

  render() {
    const { children } = this.props;
    const img = children[1].props.children[3].props;
    const img2 = children[3].props.children[3].props;
    const img3 = children[5].props.children[3].props;
    const img4 = children[7].props.children[3].props;

    return (
      <div className="ibm--carousel">
        <div className="ibm--carousel-slide-wrapper">
          <div className="ibm--carousel-slide">
            <img src={img.src} alt={img.alt} className={img.className} />
            <img src={img2.src} alt={img2.alt} className={img2.className} />
            <img src={img3.src} alt={img3.alt} className={img3.className} />
            <img src={img4.src} alt={img4.alt} className={img4.className} />
          </div>
          <button className="ibm--carousel-slide-nav left">
            <ChevronLeft32 aria-label="Carousel slide left button" />
          </button>
          <button className="ibm--carousel-slide-nav right">
            <ChevronRight32 aria-label="Carousel slide right button" />
          </button>
        </div>
        <RadioButtonGroup
          className="ibm--carousel-nav-wrapper"
          name="Carousel nav"
          valueSelected={1}
          onChange={e => this.onChange(e)}>
          <RadioButton
            className="ibm--carousel-nav-item"
            value={1}
            labelText=""
          />
          <RadioButton
            className="ibm--carousel-nav-item"
            value={2}
            labelText=""
          />
          <RadioButton
            className="ibm--carousel-nav-item"
            value={3}
            labelText=""
          />
          <RadioButton
            className="ibm--carousel-nav-item"
            value={4}
            labelText=""
          />
        </RadioButtonGroup>
      </div>
    );
  }
}
