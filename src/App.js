import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddProduct from './containers/AddProduct';
import ProductListContainer from './containers/ProductListContainer';

import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import Callback from './containers/Callback';
import NavigationContainer from './containers/NavigationContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>Product List</h1>
            <Navigation />
            <Route exact path="/" component={ProductListContainer} />
            <Route exact path="/new-product" component={AddProduct} />
            <Route exact path="/callback" component={Callback} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
