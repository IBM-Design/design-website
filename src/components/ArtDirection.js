import React from 'react';
import useMedia from 'use-media';
import PropTypes from 'prop-types';

const ArtDirection = ({ children }) => {
  const isMobile = useMedia({ maxWidth: '42rem' });
  const isTablet = useMedia({ maxWidth: '66rem' });

  console.log({ isMobile, isTablet });

  console.log(children);

  const childrenArray = React.Children.toArray(children);

  if (isMobile || !childrenArray[1]) {
    return childrenArray[0];
  }

  if (isTablet || !childrenArray[2]) {
    return childrenArray[1];
  }

  return childrenArray[2];
};

ArtDirection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ArtDirection;
