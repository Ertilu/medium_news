import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page3({ isMobile, id }) {
  return (
    <ScrollOverPack id={id} className="content-wrapper page">
      <TweenOne
        key="image"
        className="image3 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim
        className="text-wrapper"
        key="text"
        type={isMobile ? 'bottom' : 'right'}
        leaveReverse
        style={{ top: '40%' }}
      >
        <h2 key="h2">Thank you for visit this website</h2>
        <p key="p" style={{ maxWidth: 280 }}>
          Keep Waiting for another update.
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  isMobile: PropTypes.bool,
  id: PropTypes.any,
};
