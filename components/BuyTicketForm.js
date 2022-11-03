import { useRouter } from "next/router";
import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

const BuyTicketForm = ({ loading, event, onClick }) => {
  
  const router = useRouter();
  const { id } = router.query;
  const [vipTickets, setVipTickets] = useState(0);
  const [regularTickets, setRegularTickets] = useState(0);
  const [mobileNumber, setPhoneNumber] = useState("");
  let date = new Date();
  let timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

  let currentDate = date.getTime();
  let token;
  let totalAmount = 0;
  const conditionedPricingVIP =
    parseInt(
      (new Date(
        `${event.early_booking_end_date}`.split("-").join("/")
      ).getTime() -
        currentDate) /
        (1000 * 60 * 60 * 24)
    ) > 0
      ? event.early_booking_price_vip
      : event.vip_price;

  const conditionedPricingRegular =
    parseInt(
      (new Date(
        `${event.early_booking_end_date}`.split("-").join("/")
      ).getTime() -
        currentDate) /
        (1000 * 60 * 60 * 24)
    ) > 0
      ? event.early_booking_price_regular
      : event.regular_price;

  const vipTicketCount = event.tickets.reduce(
    (previousTicketCount, currentTicketCount) =>
      previousTicketCount + currentTicketCount.number_of_vip_tickets,
    0
  );

  const regularTicketCount = event.tickets.reduce(
    (previousTicketCount, currentTicketCount) =>
      previousTicketCount + currentTicketCount.number_of_regular_tickets,
    0
  );

  totalAmount =
    vipTickets * conditionedPricingVIP +
    regularTickets * conditionedPricingRegular;

  let ticketNumber = vipTicketCount + regularTicketCount;

  const password = new Buffer.from(
    process.env.SHORTCODE + process.env.PASSKEY + timestamp
  ).toString("base64");

  const number = mobileNumber.substring(1);
  // async function handleClick() {
  function handleClick() {
    const formData = {
      ticket_no: eventTicket,
      user_id: "",
      event_id: parseInt(id),
      number_of_vip_tickets: parseInt(vipTickets),
      number_of_regular_tickets: parseInt(regularTickets),
    };
    fetch("http://[::1]:3000/api/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
        closeModal;
        router.push("/");
      });
    // setProcessing(true);
    // try {
    //   const resp = await fetch("http://localhost:7000/api/mpesa-auth");
    //   const data = await resp.json();
    //   const paySend = await fetch(
    //     "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    //     {
    //       method: "POST",
    //       header: {
    //         Authorization: `Bearer ${data["access_token"]}`,
    //       },
    //       body: JSON.stringify({
    //         BusinessShortCode: 174379,
    //         Password: password,
    //         Timestamp: timestamp,
    //         Amount: totalAmount,
    //         PartyA: `254${number}`,
    //         PartyB: 174379,
    //         PhoneNumber: `254${number}`,
    //         CallBackURL: "https://mydomain.com/pat",
    //         AccountReference: `254${number}`,
    //         TransactionDesc: "ETickets",
    //       }),
    //     }
    //   );
    //   const paySendInfo = await paySend.json();
    //   // .then((response)=> {
    //   //   z.log(response)
    //   // response.status(200).json(data)}).catch((error)=>
    //   // {console.log(error.message)})
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setProcessing(false);
    // }
  }
  const eventTicket = event.ticket_format + `${ticketNumber + 1}`;
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      size="small"
    >
      <Form.Item label="Ticket No:">
        <label>{eventTicket}</label>
      </Form.Item>
      <Form.Item label="VIP">
        <label>Tickets Remaining</label>
        <Form.Item label={event.vip_no_of_tickets - vipTicketCount}></Form.Item>
        <Form.Item label="Price">
          <Form.Item label={conditionedPricingVIP}>
            <Input
              type="number"
              placeholder="book vip seat"
              min="0"
              onChange={(event) => setVipTickets(event.target.value)}
            />
          </Form.Item>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Regular">
        <label>Tickets Remaining</label>
        <Form.Item
          label={event.regular_no_of_tickets - regularTicketCount}
        ></Form.Item>
        <Form.Item label="Price">
          <Form.Item label={conditionedPricingRegular}>
            <Input
              placeholder="booked regular number of seats "
              type="number"
              min="0"
              onChange={(event) => setRegularTickets(event.target.value)}
            />
          </Form.Item>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Amount">
        <Input type="number" value={totalAmount} />
      </Form.Item>
      <Form.Item label="Mobile no">
        <Input
          placeholder="phone number"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          style={{
            backgroundColor: "#d1410a",
            cursor: "pointer",
            width: "70%",
            margin: 20,
            color: "#fff",
            borderRadius: 10,
            height: 40,
            border: "none",
          }}
          type="primary"
          htmlType="submit"
          loading={loading}
          onClick={() => {
            onClick()
            message.success("Payment Successful!")
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default BuyTicketForm;
