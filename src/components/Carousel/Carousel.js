import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from 'carbon-components-react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    const stringArr = this.props.count.split(' ');
    const numArr = stringArr.map(i => Number(i));

    this.state = {
      checkedRadio: 1,
      autoplay: setInterval(this.nextSlide, 6000),
      items: numArr,
    };
  }

  componentDidMount() {
    const slide = document.querySelector(
      `.ibm--carousel-slide.${this.props.id}`
    );
    slide.addEventListener('touchstart', this.touchStart, false);
    slide.addEventListener('touchmove', this.touchMove, false);
    slide.addEventListener('mousedown', this.mouseStart);
    slide.addEventListener('mousemove', this.mouseMove);
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
    /**
     * value of each radio button starting from 1 to however many slides
     * separated by a space
     * i.e. "1 2 3 4"
     */
    count: PropTypes.string.isRequired,
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
    const items = this.state.items;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        if (state === items.length) {
          this.onChange(items[0]);
        } else {
          this.onChange(state + 1);
        }
      } else {
        // swiped right
        if (state === items[0]) {
          this.onChange(items.length);
        } else {
          this.onChange(state - 1);
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
    const items = this.state.items;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // swiped left
        if (state === items.length) {
          this.onChange(items[0]);
        } else {
          this.onChange(state + 1);
        }
      } else {
        // swiped right
        if (state === items[0]) {
          this.onChange(items.length);
        } else {
          this.onChange(state - 1);
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
    const items = this.state.items;
    if (state === items.length) {
      this.onChange(items[0]);
    } else {
      this.onChange(state + 1);
    }
  };

  //UPDATING RADIO BUTTON
  onChange = e => {
    const slide = document.querySelector(
      `.ibm--carousel-slide.${this.props.id}`
    );
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
    const { children, id, count } = this.props;
    const imgArr = this.state.items.map((i, x) => {
      const index = i + x;
      return children[index].props.children[3].props;
    });

    return (
      <div className={`ibm--carousel ${this.props.id}`}>
        <div className="ibm--carousel-slide-wrapper">
          <div className={`ibm--carousel-slide ${this.props.id}`}>
            {imgArr.map((img, i) => {
              return (
                <img
                  draggable="false"
                  src={img.src}
                  alt={img.alt}
                  key={`img-${i}`}
                  className={img.className}
                />
              );
            })}
          </div>
        </div>
        <RadioButtonGroup
          className={'ibm--carousel-nav-wrapper'}
          name={`Carousel navigation ${this.props.id}`}
          valueSelected={this.state.checkedRadio}
          onChange={this.onChange}>
          {this.state.items.map(i => {
            return (
              <RadioButton
                className="ibm--carousel-nav-item"
                value={i}
                key={i}
                labelText=""
              />
            );
          })}
        </RadioButtonGroup>
      </div>
    );
  }
}
