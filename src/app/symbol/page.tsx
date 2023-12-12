import { Form, Input } from 'antd';
import React from 'react';

const SymbolPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  return (
    <Form name='dynamic_form_nest_item' onFinish={onFinish} autoComplete='off'>
      <Form.List name='symbol'>
        {(fields) => (
          <div>
            {fields.map((field, index) => (
              <Form.Item {...field} key={index}>
                <Input />
              </Form.Item>
            ))}
          </div>
        )}
      </Form.List>
    </Form>
  );
};

export default SymbolPage;
