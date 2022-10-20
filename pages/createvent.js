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
      <Form.Item label="Organiser Name">
        <Input />
      </Form.Item>
      <Form.Item label="Location">
        <Input />
      </Form.Item>
      <Form.Item label="Description">
        <Input />
      </Form.Item>
      <Form.Item label="Category">
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
     
      <Form.Item label="Submit">
        <Button>Button</Button>
      </Form.Item>
    </Form>
   </div>
  );
};
export default App;