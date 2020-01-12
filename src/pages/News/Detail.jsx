import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import axios from 'axios';
import { newsApi } from '../../data/apiData';

export default function Detail(props) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const title = window.location.href.split('?title=');
    axios
      .get(`${newsApi}/@breakingnews`)
      .then((data) => {
        setNews(data.data.items.filter(item => item.title === decodeURI(title[title.length - 1])));
      })
      .catch((e) => {
        window.console.log(e);
        // eslint-disable-next-line no-alert
        window.alert('failed to load data, please try again.');
        window.location.href = '/';
      });
  }, []);

  return (
    <ScrollOverPack id="page1" className="content-wrapper page">
      <QueueAnim
        type={props.isMobile ? 'bottom' : 'right'}
        className="text-wrapper"
        key="text"
        leaveReverse
      >
        <Row gutter={12}>
          <Col lg={{ span: 16, push: 12 }}>
            {news.map(data => (
              <div dangerouslySetInnerHTML={{ __html: data.description }} style={{ textAlign: 'center', width: '1000px', margin: '0 auto' }} />
            ))}
          </Col>
        </Row>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Detail.propTypes = {
  isMobile: PropTypes.bool,
};
