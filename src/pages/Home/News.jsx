import React, { useState, useEffect } from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Skeleton, Card, Row, Col, Avatar } from 'antd';
import { newsApi } from '../../data/apiData';

const { Meta } = Card;

export default function Page2(props) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${newsApi}/@breakingnews`)
      .then((data) => {
        window.console.log(data);
        setNews(data.data.items);
        setAuthor(data.data.feed);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        window.console.log(e);
        // eslint-disable-next-line no-alert
        window.alert('failed to load data, please try again.');
      });
  }, []);

  return (
    <ScrollOverPack
      id={props.id}
      className="content-wrapper"
      style={news.length > 1 ? {
        minHeight: '700px',
        height: '100vh',
        marginBottom: '4800px',
       } : {
        minHeight: '700px',
        height: '100vh',
       }
      }
    >
      <QueueAnim
        className="text-wrapper left-text"
        key="text"
        duration={450}
        type="bottom"
        leaveReverse
      >
        <Row gutter={24} style={{ width: '1200px', margin: '0 auto' }}>
          <h5 key="h2" style={{ textAlign: 'center' }}>{news.length > 1 ? 'News by Breaking News.' : null}</h5>
          { news.length > 1 ?
              news.map(data => (
                <Col lg={{ span: 24 }} xs={{ span: 12 }} sm={{ span: 24 }}>
                  <Link to={`news?title=${data.title}`} >
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
          :
              <Row gutter={24} style={{ width: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h1>Failed to load data. Please check your internet connection</h1>
              </Row>
          }
        </Row>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image2 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(100px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
Page2.propTypes = {
  id: PropTypes.string,
};
