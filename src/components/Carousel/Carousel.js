import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checkedRadio: 1,
    };
  }

  componentDidMount() {
    const slide = document.querySelector(`.${this.props.id}`);
    slide.addEventListener('touchstart', this.handleStart, false);
    slide.addEventListener('touchend', this.handleEnd, false);
    slide.addEventListener('touchmove', this.moveTouch, false);
  }

  static propTypes = {
    /**
     * for slide images
     */
    children: PropTypes.node,
    /**
     * unique id for each carousel, required
     */
    id: PropTypes.string.isRequired,
  };

  initialX = null;
  initialY = null;

  handleStart = e => {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  };

  handleEnd = e => {};

  moveTouch = e => {
    if (this.initialX === null) {
      return;
    }

    if (this.initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;
    const carousel = document.querySelector('.ibm--carousel');
    const radioGroup = carousel.querySelector(
      `.ibm--carousel-nav-wrapper.${this.props.id}`
    );
    const radios = radioGroup.querySelectorAll('.bx--radio-button');

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        console.log('swiped left');
        if (this.state.checkedRadio === 1) {
          this.onChange(2);
        } else if (this.state.checkedRadio === 2) {
          this.onChange(3);
        } else if (this.state.checkedRadio === 3) {
          this.onChange(4);
        } else if (this.state.checkedRadio === 4) {
          this.onChange(1);
        }
      } else {
        // swiped right
        console.log('swiped right');
        if (this.state.checkedRadio === 1) {
          this.onChange(4);
        } else if (this.state.checkedRadio === 2) {
          this.onChange(1);
        } else if (this.state.checkedRadio === 3) {
          this.onChange(2);
        } else if (this.state.checkedRadio === 4) {
          this.onChange(3);
        }
      }
    }

    this.initialX = null;
    this.initialY = null;
    e.preventDefault();
  };

  onChange = e => {
    const slide = document.querySelector(`.${this.props.id}`);
    const images = slide.querySelectorAll('img');
    const carousel = document.querySelector('.ibm--carousel');
    const radioGroup = carousel.querySelector(
      `.ibm--carousel-nav-wrapper.${this.props.id}`
    );
    const radios = radioGroup.querySelectorAll('.bx--radio-button');
    this.setState({ checkedRadio: e });
    images.forEach(img => {
      img.style.transform = `translate(${e * -100 + 100}%, 0)`;
    });
  };

  render() {
    const { children, id } = this.props;
    const img = children[1].props.children[3].props;
    const img2 = children[3].props.children[3].props;
    const img3 = children[5].props.children[3].props;
    const img4 = children[7].props.children[3].props;

    return (
      <div className="ibm--carousel">
        <div className="ibm--carousel-slide-wrapper">
          <div className={`ibm--carousel-slide ${this.props.id}`}>
            <img src={img.src} alt={img.alt} className={img.className} />
            <img src={img2.src} alt={img2.alt} className={img2.className} />
            <img src={img3.src} alt={img3.alt} className={img3.className} />
            <img src={img4.src} alt={img4.alt} className={img4.className} />
          </div>
        </div>
        <RadioButtonGroup
          className={`ibm--carousel-nav-wrapper ${this.props.id}`}
          name={`Carousel nav ${this.props.id}`}
          valueSelected={1}
          onChange={this.onChange}>
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
