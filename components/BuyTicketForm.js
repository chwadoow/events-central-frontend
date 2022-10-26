import { Button, Form, Input, Radio } from 'antd';
import React, { useState } from 'react';

  const BuyTicketForm = ({loading, onClick, event}) => {
    const [vipTickets, setVipTickets] = useState(0)
    const [regularTickets, setRegularTickets] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
      setComponentSize(size);
    };
    var date = new Date()
    var currentDate = date.getTime()
    
    const conditionedPricingVIP = parseInt(((new Date(`${event.early_booking_end_date}`.split("-").join("/")).getTime()) - currentDate )/(1000 * 60 * 60 * 24)) > 0 ? event.early_booking_price_vip: event.vip_price

    const conditionedPricingRegular = parseInt(((new Date(`${event.early_booking_end_date}`.split("-").join("/")).getTime()) - currentDate )/(1000 * 60 * 60 * 24)) > 0 ? event.early_booking_price_regular: event.regular_price

    function handleChange(event){
      console.log(event.target.value)
      setTotalAmount((vipTickets * conditionedPricingVIP) + (regularTickets * conditionedPricingRegular))
    }
    console.log(event.tickets)
    const vipTicketCount = event.tickets.reduce((previouseTicketCount, currentTicketCount) => previouseTicketCount + currentTicketCount.number_of_vip_tickets,0);

    const regularTicketCount = event.tickets.reduce((previouseTicketCount, currentTicketCount) => previouseTicketCount + currentTicketCount.number_of_regular_tickets,0);

    
    console.log(vipTicketCount)

    console.log(regularTicketCount)



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
        <Form.Item label="Ticket No:">
        <label>Yet to Input</label>
          </Form.Item>
        <Form.Item label="VIP">
        <label>Tickets Remaining</label>
          <Form.Item label={event.vip_no_of_tickets}>
          </Form.Item>
        <Form.Item label="Price">
        <Form.Item label={conditionedPricingVIP}>
          <Input  type="number" placeholder="book vip seat" onChange={handleChange}/>
          {/* // onChange={(event)=> setVipTickets(event.target.value)} */}
          </Form.Item>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Regular">
        <label>Tickets Remaining</label>
        <Form.Item label={event.regular_no_of_tickets}>
          </Form.Item>
          <Form.Item label="Price">
        <Form.Item label={conditionedPricingRegular}>
          <Input placeholder="booked regular number of seats " type="number" onChange={handleChange}/>
          {/* //  onChange={(event)=> setRegularTickets(event.target.value)} */}
          </Form.Item>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Amount">
          <Input type="number" value={totalAmount}/>
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