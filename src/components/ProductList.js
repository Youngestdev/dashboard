import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Product from './Product';

const ProductList = ({ productList }) => (
  <Jumbotron>
    <ListGroup>
      {productList.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </ListGroup>
  </Jumbotron>
);

ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ProductList;
