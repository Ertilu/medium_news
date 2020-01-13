import React from 'react';
import { enquireScreen } from 'enquire-js';
import DocumentTitle from 'react-document-title';
// import Header from './Header';
import Navbar from '../../components/Navbar';
import Detail from './Detail';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class News extends React.Component {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }

  render() {
    return (
      [
        <Navbar key="header" isFirstScreen={this.state.isFirstScreen} isMobile={this.state.isMobile} />,
        <Detail key="banner" id="home" />,
        <DocumentTitle title="My Medium News" key="title" />,
      ]
    );
  }
}
export default News;
