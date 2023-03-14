import React from 'react';
import { Row, Col } from 'react-bootstrap';
import storeItems from "../data/items.json";

export default function OrderOnline() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3}>
        {storeItems.map(item => (
          <Col key={item.id}>
          </Col>
        ))}
      </Row>
    </>
  )
}
