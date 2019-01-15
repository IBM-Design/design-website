import React from 'react';
import PropTypes from 'prop-types';

const eyeBeeM = (
  <svg
    className="eye-bee-m"
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 30 72"
    viewBox="0 0 30 72"
    width="30"
    height="72">
    <defs>
      <filter
        id="a"
        width="30"
        height="72"
        x="0"
        y="0"
        filterUnits="userSpaceOnUse">
        <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      </filter>
    </defs>
    <mask id="b" width="30" height="72" x="0" y="0" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M0 0h30v72H0z" filter="url(#a)" />
    </mask>
    <path
      fill="#fff"
      d="M27.4 36.5l-7.5-3.2 2.5 7.9c.5 1.4 1.7 2.8 3.8 2.8 2.1 0 3.9-1.7 3.9-3.8-.1-1.8-1.2-3-2.7-3.7zM14.9 60.7l-.5-1.3H5.8v1.3h4.6v-1.3l.5 1.3h4zm-3.5-9.9H2.8v1.3h9.1l-.5-1.3zm1 2.8H2.8V55h10.1l-.5-1.4zm4.7 1.4h10.1v-1.4h-9.6l-.5 1.4zM5.8 57.8h8.1l-.5-1.3H5.8v1.3zm6.1 5.7h6.2l.5-1.4h-7.2l.5 1.4zm1 2.8H17l.5-1.3h-5.1l.5 1.3zm1.1 2.9h2l.5-1.4h-3l.5 1.4zm1 2.8l.5-1.3h-1L15 72zm3.6-21.2l-.5 1.3h9.1v-1.3h-8.6zm5.6 5.7h-7.6l-.5 1.3h8.1v-1.3zm-4.6 4.2h4.6v-1.3h-8.6l-.5 1.3h4l.5-1.3v1.3zm0 2.8h4.6v-1.3h-4.6v1.3zm0 2.8h4.6V65h-4.6v1.3zm0 2.9h7.6v-1.3h-7.6v1.3zm0 2.8h7.6v-1.3h-7.6V72zM5.8 63.5h4.6v-1.3H5.8v1.3zm0 2.8h4.6V65H5.8v1.3zm-3 2.9h7.6v-1.3H2.8v1.3zm0 2.8h7.6v-1.3H2.8V72zm7.8-26.5c.8 1.6 2.4 2.7 4.4 2.7 1.9 0 3.6-1.1 4.4-2.7h-8.8zm9.2-4.6h-9.6v2.5h9.6v-2.5zm0-4.7h-9.6v2.5h9.6v-2.5zm-.4-2.2c-.8-1.6-2.4-2.7-4.4-2.7-1.9 0-3.6 1.1-4.4 2.7h8.8zM0 40.1c0 2.1 1.8 3.8 3.9 3.8 2.1 0 3.3-1.4 3.8-2.8l2.5-7.9-7.5 3.2c-1.6.8-2.7 2-2.7 3.7zm17.8-14c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2zm-5.6 0c-1.2 0-2.2 1-2.2 2.2 0 1.2 1 2.2 2.2 2.2 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2zM15 0C10.3 0 6.1 2.6 3.9 6.5v2.2c2.7-3.1 6.6-5 11.1-5s8.5 2 11.1 5V6.5C23.9 2.6 19.7 0 15 0zm6.7 15.1c0-3.6-3-6.5-6.7-6.5s-6.7 2.9-6.7 6.5 3 6.5 6.7 6.5 6.7-2.9 6.7-6.5zm5.2 0c-2 4.7-6.5 7.9-11.9 7.9s-9.9-3.3-11.9-7.9c2-4.7 6.5-7.9 11.9-7.9s9.9 3.3 11.9 7.9zm-8.9 0c0 1.6-1.3 2.9-3 2.9s-3-1.3-3-2.9c0-1.6 1.3-2.9 3-2.9s3 1.3 3 2.9z"
      mask="url(#b)"
    />
  </svg>
);

export default class TitleBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div className="title-block background--black">
        <div className="ibm--grid ibm--grid--bleed">
          <div className="ibm--row">
            <div className="title-block__content ibm--col-lg-12 ibm--col-md-7">
              {eyeBeeM}
              <h1 className="title-block__text">{children}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
