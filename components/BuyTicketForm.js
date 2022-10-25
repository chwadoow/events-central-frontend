import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

  const BuyTicketForm = ({loading, onClick}) => {
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    
    return (
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Regular">
          <Input />
        </Form.Item>
        <Form.Item label="Amount">
          <Input />
        </Form.Item>
        <Form.Item label="Mobile no">
          <Input />
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit" loading={loading} onClick={onClick}>
            Submit
            </Button>
        </Form.Item>

      </Form>
    );
  };
  export default BuyTicketForm;