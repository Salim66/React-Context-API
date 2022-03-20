import React, { useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import MsgContext from '../Context/MsgContext';

const Page3 = () => {

  const [msg , handleInputValue] = useContext(MsgContext);
  
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <div>{msg}</div>
            <Form.Control value={msg} onChange={handleInputValue} />
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Page3;