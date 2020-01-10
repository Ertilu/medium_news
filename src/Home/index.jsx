import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
// import Header from './Header';
import Navbar from './Navbar';
import Banner from './Banner';
import Page1 from './Page1';
import Category from './Category';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import './static/style';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
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
        <Banner key="banner" onEnterChange={this.onEnterChange} id="home" />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Category id="category" />,
        <Page2 key="page2" id="login" />,
        <Page3 key="page3" isMobile={this.state.isMobile} id="register" />,
        <Footer key="footer" />,
        <DocumentTitle title="My Medium News" key="title" />,
      ]
    );
  }
}
export default Home;
