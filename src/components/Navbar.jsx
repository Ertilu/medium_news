import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class Navbar extends React.Component {
  componentDidMount = () => {
    // Collapse Navbar
    const navbarCollapse = () => {
      if ($('#navbarUtama').offset().top > 300) {
        $('#navbarUtama').addClass('navbar-shrink');
      } else {
        $('#navbarUtama').removeClass('navbar-shrink');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbarUtama">
        <div className="container-fluid">
          <div key="button">
            <a>
              <Link
                to="/"
              >
                &laquo;  Back To Home
              </Link>
            </a>
          </div>
          <div className="navbar-header">
            <Link
              href="#"
              className="navbar-brand scroll"
              activeClass="active"
              spy
              smooth
              offset={-70}
              duration={500}
              onClick={this.scrollToTop}
            >
              <p style={{ color: 'grey' }}>News Everyday</p>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
