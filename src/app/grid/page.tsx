import React from 'react';
import { Col, Row } from 'antd';

const Grid: React.FC = () => (
  <>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 32]}>
      <Col span={8}>
        <div style={{ height: '100px', background: 'pink' }}>1</div>
      </Col>
      <Col span={8}>
        <div style={{ height: '100px', background: 'beige' }}>2</div>
      </Col>
      <Col span={8}>
        <div style={{ height: '100px', background: 'BurlyWood' }}>3</div>
      </Col>
    </Row>
    <Row wrap={true}>
      <Col span={4} order={1}>
        <div style={{ height: '100px', background: 'pink' }}>1</div>
      </Col>
      <Col span={8} order={2} offset={3}>
        <div style={{ height: '100px', background: 'beige' }}>2</div>
      </Col>
      <Col span={8} order={3}>
        <div style={{ height: '100px', background: 'BurlyWood' }}>3</div>
      </Col>
      <Col span={8} order={3}>
        <div style={{ height: '100px', background: 'BurlyWood' }}>3</div>
      </Col>
    </Row>
  </>
);

export default Grid;
