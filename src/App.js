import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddProduct from './containers/AddProduct';
import ProductListContainer from './containers/ProductListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Product List</h1>
            <AddProduct />
            <ProductListContainer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
