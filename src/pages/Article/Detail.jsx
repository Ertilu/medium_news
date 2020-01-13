import React from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import DocumentTitle from 'react-document-title';
import axios from 'axios';
import { newsApi } from '../../data/apiData';
import Navbar from '../../components/Navbar';

export default class Detail extends React.Component {
  state = {
    article: [],
  }

  componentDidMount = () => {
    const title = window.location.href.split('?title=');
    axios
      // eslint-disable-next-line react/prop-types
      .get(`${newsApi}//invironment/tagged/${this.props.topic.split(' ').join('-')}&api_key=glknbrydywxtnxdj2rbj9e5lhfyospfd4tiaybhy`)
      .then((data) => {
        this.setState({
          article: data.data.items.filter(item => (
            item.title === decodeURI(title[title.length - 1])
          )),
        });
      })
      .catch((e) => {
        window.console.log(e);
        // eslint-disable-next-line no-alert
        window.alert('failed to load data, please try again.');
        window.location.href = '/';
      });
  }

  render() {
    return (
      [
        <Navbar key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
        <ScrollOverPack id="page1" className="content-wrapper page">
          <QueueAnim
            type="bottom"
            className="text-wrapper"
            key="text"
            leaveReverse
          >
            <Row gutter={12}>
              <Col lg={{ span: 16, push: 12 }}>
                {this.state.article.map(data => (
                  <div dangerouslySetInnerHTML={{ __html: data.description }} style={{ textAlign: 'center', width: '1000px', margin: '0 auto' }} />
                ))}
              </Col>
            </Row>
          </QueueAnim>
        </ScrollOverPack>,
        <DocumentTitle title="My Medium News" key="title" />,
      ]
    );
  }
}
