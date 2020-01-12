import React from 'react';
import { TweenOneGroup } from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { Art, Industry, IT } from '../../data/dummyTopics';

export default function Category(props) {
  return (
    <ScrollOverPack id={props.id} className="content-wrapper page" style={{ height: '8000px' }}>
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h1 key="h2">
          Explore Topics
        </h1>
      </QueueAnim>
      <TweenOneGroup
        exclusive
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0, opacity: 1, duration: 550, delay: 150, ease: 'easeOutQuad',
        }}
      >
        <QueueAnim
          className="text-wrapper-bottom"
          key="text"
          leaveReverse
          type="bottom"
        >
          <div>
            <h2>Art & Entertainment</h2>
            <hr />
            <Row gutter={24} style={{ width: '1200px', margin: '0 auto' }}>
              {
                Art.map(data => (
                  <Col lg={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 12 }} key={data.id}>
                    <Link to="/article">
                      <Card
                        title={data.title}
                        bordered={false}
                        style={{ margin: '20px 10px' }}
                        cover={
                          <img
                            alt="art"
                            src={data.image}
                          />
                        }
                        hoverable
                        onClick={() => toNews(data.title)}
                      />
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </div>

          <div style={{ marginTop: '80px' }}>
            <h2>Industry</h2>
            <hr />
            <Row gutter={24} style={{ width: '1200px', margin: '0 auto' }}>
              {
                Industry.map(data => (
                  <Col lg={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 12 }} key={data.id}>
                    <Link to="/article">
                      <Card
                        title={data.title}
                        bordered={false}
                        style={{ margin: '20px 10px' }}
                        cover={
                          <img
                            alt="art"
                            src={data.image}
                          />
                        }
                        hoverable
                        onClick={() => toNews(data.title)}
                      />
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </div>

          <div style={{ marginTop: '80px' }}>
            <h2>Innovation & Technology</h2>
            <hr />
            <Row gutter={24} style={{ width: '1200px', margin: '0 auto' }}>
              {
                IT.map(data => (
                  <Col lg={{ span: 8 }} xs={{ span: 24 }} sm={{ span: 12 }} key={data.id}>
                    <Link to="/article">
                      <Card
                        title={data.title}
                        bordered={false}
                        style={{ margin: '20px 10px' }}
                        cover={
                          <img
                            alt="art"
                            src={data.image}
                          />
                        }
                        hoverable
                        onClick={() => toNews(data.title)}
                      />
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </div>
        </QueueAnim>
      </TweenOneGroup>
    </ScrollOverPack>
  );
}

Category.propTypes = {
  id: PropTypes.string,
};
