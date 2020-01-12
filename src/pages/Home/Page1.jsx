import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-scroll';

export default function Page1({ isMobile }) {
  return (
    <ScrollOverPack id="page1" className="content-wrapper page">
      <TweenOne
        key="image"
        className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim
        type={isMobile ? 'bottom' : 'right'}
        className="text-wrapper"
        key="text"
        leaveReverse
      >
        <h2 key="h2">Welcome :)</h2>
        <p key="p" style={{ maxWidth: 310 }}>Are you ready for read news today ? Click button below to start reading。</p>
        <div key="button">
          <a>
            <Link
              href="#"
              className="navbar-brand scroll"
              activeClass="active"
              spy
              smooth
              offset={-70}
              duration={500}
              to="news"
            >
              Let's go
              <Icon type="right" />
            </Link>
          </a>
        </div>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page1.propTypes = {
  isMobile: PropTypes.bool,
};
