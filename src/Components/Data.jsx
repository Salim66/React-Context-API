import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import MsgContext from '../Context/MsgContext';

const Data = () => {

    const [msg , handleInputValue] = useContext(MsgContext);

  return (
    <Container>
        <Row className='my-5'>
            <Col md={4}>
                <Form.Control value={msg} onChange={ (e) => handleInputValue(e) } />
                <p>{msg}</p>
            </Col>
        </Row>
    </Container>
  )
};

export default Data;