import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

  const BuyTicketForm = ({loading, onClick, event}) => {
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
        <Form.Item label="VIP">
        <label>Tickets Remaining</label>
          <Form.Item label={event.vip_no_of_tickets}>
          </Form.Item>
        <Form.Item label="Price">
        <Form.Item label={event.early_booking_price_vip}>
          <Input  type="number" placeholder="book vip seat"/>
          </Form.Item>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Regular">
        <label>Tickets Remaining</label>
        <Form.Item label={event.regular_no_of_tickets}>
          </Form.Item>
          <Form.Item label="Price">
        <Form.Item label={event.early_booking_price_regular}>
          <Input placeholder="booked regular number of seats " type="number"/>
          </Form.Item>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Amount">
          <Input placeholder="Total Amount" type="number"/>
          </Form.Item>
        <Form.Item label="Mobile no">
          <Input placeholder="phone number"/>
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