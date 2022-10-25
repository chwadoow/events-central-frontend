
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import React, { useState } from 'react';
const App = () => {
  const [componentSize, setComponentSize] = useState('large');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className='create'>
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
     
      <Form.Item label="Event Name">
        <Input />
      </Form.Item>
      <Form.Item label="category_id">
        <Input />
      </Form.Item>
      <Form.Item label="title">
        <Input />
      </Form.Item>
      <Form.Item label="event_date">
        <Input />
      </Form.Item>
      <Form.Item label="early_booking_end_date">
        <Select>
          <Select.Option value="demo">Art ant Theatre</Select.Option>
          <Select.Option value="demo">Sports</Select.Option>
        </Select>
      </Form.Item>
      {/* <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: 'Light',
              value: 'light',
              children: [
                {
                  title: 'Bamboo',
                  value: 'bamboo',
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
     
      <Form.Item label="Event Starting date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Ticket Number">
        <InputNumber />
      </Form.Item>
      <Form.Item label="location">
      <Input />
      </Form.Item>
      <Form.Item label="price">
      <Select>
          <Select.Option value="demo">regular_price</Select.Option>
          <Select.Option value="demo">vip_price</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="no_of_tickets">
      <Select>
          <Select.Option value="demo">regular</Select.Option>
          <Select.Option value="demo">vip</Select.Option>
        </Select>
      </Form.Item>
      
      <Form.Item label="Submit">
        <Button>Button</Button>
      </Form.Item>
    </Form>

    
   </div>
  );
};
export default App;

