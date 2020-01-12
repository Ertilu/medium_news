import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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
    navbarCollapse();
    $(window).scroll(navbarCollapse);
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbarUtama">
        <div className="container-fluid">
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
              News Everyday
            </Link>
          </div>
          <button type="button" className="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#list" aria-control="navbarNav" aria-expanded="false" >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse flex-row-reverse" id="list">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link scroll"
                  activeClass="active"
                  to="home"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link scroll"
                  activeClass="active"
                  to="news"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link scroll"
                  activeClass="active"
                  to="category"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#"
                  className="nav-link scroll"
                  activeClass="active"
                  to="register"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
