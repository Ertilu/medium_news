import React, { useState, useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Skeleton, Card, Row, Col, Avatar, Spin } from 'antd';
import { newsApi } from '../../data/apiData';

const { Meta } = Card;

export default function Page2(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState({});
  const [error, setError] = useState();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`${newsApi}/invironment/tagged/${props.topic.split(' ').join('-')}&api_key=glknbrydywxtnxdj2rbj9e5lhfyospfd4tiaybhy`)
      .then((data) => {
        window.console.log(data);
        setArticle(data.data.items);
        setAuthor(data.data.feed);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        window.console.log(e);
        // eslint-disable-next-line no-alert
        window.alert('failed to load data, please check your internet connection and try again.');
        setError(true);
      });
  }, []);

  return (
    [
      <ScrollOverPack
        id={props.id}
        className="content-wrapper page"
      >
        <QueueAnim
          className="text-wrapper left-text"
          key="text"
          duration={450}
          type="bottom"
          leaveReverse
        >
          <Row gutter={24} style={{ width: '1200px', margin: '0 auto' }}>
            <Spin size="large" tip="Loading Data..." spinning={loading}>
              <h5 key="h2" style={{ textAlign: 'center' }}>Found {loading ? <Spin /> : article.length} article with {props.topic} topic.</h5>
              {
                error ? <h1>Failed to load article. Please check your internet connection</h1> :
                article.map(data => (
                  <Col lg={{ span: 24 }} xs={{ span: 12 }} sm={{ span: 24 }}>
                    <Link to={`read-article?title=${data.title}`} >
                      <Card
                        style={{
                        width: '600px', marginTop: 16, margin: '20px auto', padding: '20px',
                        }}
                        cover={<img alt="thumbnail news" src={data.thumbnail} style={{ width: '550px' }} />}
                        hoverable
                        loading={loading}
                      >
                        <Skeleton loading={loading} avatar active>
                          <Meta
                            avatar={
                              <Avatar src={author.image} />
                            }
                            title={data.author}
                            description={data.pubDate}
                          />
                          <h3>{data.title}</h3>
                        </Skeleton>
                      </Card>
                    </Link>
                  </Col>
                ))
              }
            </Spin>
          </Row>
        </QueueAnim>
        <TweenOne
          key="image"
          className="image2 image-wrapper"
          animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
          style={{ transform: 'translateX(100px)', opacity: 0 }}
        />
      </ScrollOverPack>,
    ]
  );
}
Page2.propTypes = {
  id: PropTypes.string,
  topic: PropTypes.string,
};
