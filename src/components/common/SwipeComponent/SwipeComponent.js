import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const SwipeComponent = props => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(props.activePage, 0);
    }
  });

  const params = {
    spaceBetween: 20,
    grabCursor: true,
    noSwiping: false,
    on: {
      slideNextTransitionStart: props.leftAction,
      slidePrevTransitionStart: props.rightAction,
    },
  };

  return (
    <Swiper ref={swiperRef} {...params}>
      {props.children}
    </Swiper>
  );
};

SwipeComponent.propTypes = {
  rightAction: PropTypes.func.isRequired,
  leftAction: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default SwipeComponent;
