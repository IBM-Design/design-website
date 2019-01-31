import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';
import { ChevronLeft32, ChevronRight32 } from '@carbon/icons-react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checkedRadio: 1,
      autoplay: setInterval(this.nextSlide, 6000),
    };
  }

  componentDidMount() {
    const slide = document.querySelector(`.${this.props.id}`);
    slide.addEventListener('touchstart', this.touchStart, false);
    slide.addEventListener('touchmove', this.touchMove, false);
    slide.addEventListener('mousedown', this.mouseStart);
    slide.addEventListener('mousemove', this.mouseMove);
    // window.addEventListener('load', this.startSlide);
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

  //TOUCH EVENT HANDLERS
  touchStart = e => {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  };

  touchMove = e => {
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
    const state = this.state.checkedRadio;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        if (state === 1) {
          this.onChange(2);
        } else if (state === 2) {
          this.onChange(3);
        } else if (state === 3) {
          this.onChange(4);
        } else if (state === 4) {
          this.onChange(1);
        }
      } else {
        // swiped right
        if (state === 1) {
          this.onChange(4);
        } else if (state === 2) {
          this.onChange(1);
        } else if (state === 3) {
          this.onChange(2);
        } else if (state === 4) {
          this.onChange(3);
        }
      }
    }

    this.initialX = null;
    this.initialY = null;
    e.preventDefault();
  };

  //MOUSE EVENT HANDLERS
  mouseStart = e => {
    this.initialX = e.clientX;
    this.initialY = e.clientY;
    console.log('initialX,Y:', this.initialX, this.initialY);
  };

  mouseMove = e => {
    if (this.initialX === null) {
      return;
    }

    if (this.initialY === null) {
      return;
    }
    const finalX = e.clientX;
    const finalY = e.clientY;
    const diffX = this.initialX - finalX;
    const diffY = this.initialY - finalY;
    const state = this.state.checkedRadio;
    console.log('final X,Y:', finalX, finalY);

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        if (state === 1) {
          this.onChange(2);
        } else if (state === 2) {
          this.onChange(3);
        } else if (state === 3) {
          this.onChange(4);
        } else if (state === 4) {
          this.onChange(1);
        }
      } else {
        // swiped right
        if (state === 1) {
          this.onChange(4);
        } else if (state === 2) {
          this.onChange(1);
        } else if (state === 3) {
          this.onChange(2);
        } else if (state === 4) {
          this.onChange(3);
        }
      }
      this.initialX = null;
      this.initialY = null;
      e.preventDefault();
    }
  };

  //AUTOPLAY FUNC.
  nextSlide = () => {
    const state = this.state.checkedRadio;
    if (state === 1) {
      this.onChange(2);
    } else if (state === 2) {
      this.onChange(3);
    } else if (state === 3) {
      this.onChange(4);
    } else if (state === 4) {
      this.onChange(1);
    }
  };

  //UPDATING RADIO BUTTON
  onChange = e => {
    const slide = document.querySelector(`.${this.props.id}`);
    const images = slide.querySelectorAll('img');

    clearInterval(this.state.autoplay);
    this.setState({
      checkedRadio: e,
      autoplay: setInterval(this.nextSlide, 6000),
    });

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
      <div className={`ibm--carousel ${this.props.id}`}>
        <div className="ibm--carousel-slide-wrapper">
          <div className={`ibm--carousel-slide ${this.props.id}`}>
            <img
              draggable="false"
              src={img.src}
              alt={img.alt}
              className={img.className}
            />
            <img
              draggable="false"
              src={img2.src}
              alt={img2.alt}
              className={img2.className}
            />
            <img
              draggable="false"
              src={img3.src}
              alt={img3.alt}
              className={img3.className}
            />
            <img
              draggable="false"
              src={img4.src}
              alt={img4.alt}
              className={img4.className}
            />
          </div>
        </div>
        <RadioButtonGroup
          className={`ibm--carousel-nav-wrapper ${this.props.id}`}
          name={`Carousel nav ${this.props.id}`}
          valueSelected={this.state.checkedRadio}
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
