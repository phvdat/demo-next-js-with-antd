'use client';
import ButtonCustom from '@/components/button/Button';
import React from 'react';
import { css } from '@emotion/react';
import ButtonCustom2 from '@/components/button2/Button';
import { Col, Row } from 'antd';
import styled from '@emotion/styled';

const ButtonCustom2Orange = styled(ButtonCustom2)({
  background: 'orange'
});

const page = () => {
  return (
    <div>
      <Row justify={'space-evenly'} style={{ marginTop: '40px' }}>
        <Col span={4}>
          <ButtonCustom customSelf={css({ background: 'pink' })}>
            @emotion/react
          </ButtonCustom>
        </Col>

        <Col span={4}>
          <ButtonCustom2 noBorder={false} large>
            @emotion/style
          </ButtonCustom2>
        </Col>

        <Col span={4}>
          <ButtonCustom2Orange>@emotion/style</ButtonCustom2Orange>
        </Col>
      </Row>
    </div>
  );
};

export default page;
