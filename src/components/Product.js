import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const Product = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

Product.propTypes = {
    title: PropTypes.string.isRequired
};

export default Product;