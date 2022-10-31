import { Col, Row, DatePicker, Form } from 'antd'
import React from 'react'

const createvent = () => {
  return (
    <div>
      <Col span={24}>
        <br />
        <Form>
          <Row justify='center' align='middle'>

            <Col span={12}>
              <Row justify='center' align='middle'>
                First
              </Row>
            </Col>

            <Col span={12}>
              <Row justify='center' align='middle'>
                Second
              </Row>
            </Col>

          </Row>
        </Form>
      </Col>
    </div>
  )
}

export default createvent