
import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://ant.design/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Template By Ant Design
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://www.linkedin.com/in/reza-raka-ab8b79187/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Build By Reza Raka Nugraha
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Copyright © 2019</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
