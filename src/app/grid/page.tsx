import React from 'react';
import { Col, Row } from 'antd';

const Grid: React.FC = () => (
  <>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 32]}>
      <Col span={8}>
        <div style={{ background: 'pink' }}>1</div>
      </Col>
      <Col span={8} pull={4}>
        <div style={{ background: 'beige' }}>2</div>
      </Col>
      <Col span={8}>
        <div style={{ background: 'BurlyWood' }}>3</div>
      </Col>
      <Col span={8}>
        <div style={{ background: 'pink' }}>1</div>
      </Col>
      <Col span={8} pull={4}>
        <div style={{ background: 'beige' }}>2</div>
      </Col>
      <Col span={8}>
        <div style={{ background: 'BurlyWood' }}>3</div>
      </Col>
    </Row>
    <Row wrap={false}>
      <Col span={4} offset={4} order={2}>
        <div style={{ background: 'pink' }}>1</div>
      </Col>
      <Col span={8} order={1} xl={{ pull: '4' }}>
        <div style={{ background: 'beige' }}>2</div>
      </Col>
      <Col span={8} order={3}>
        <div style={{ background: 'BurlyWood' }}>3</div>
      </Col>
      <Col flex={'auto'} order={3}>
        <div style={{ background: 'BurlyWood' }}>3</div>
      </Col>
    </Row>
  </>
);

export default Grid;
