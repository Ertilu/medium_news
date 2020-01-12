import React from 'react';
import { enquireScreen } from 'enquire-js';
import DocumentTitle from 'react-document-title';
// import Header from './Header';
import Navbar from '../../components/Navbar';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class App extends React.Component {
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
        <DocumentTitle title="My Medium News" key="title" />,
      ]
    );
  }
}
export default App;
