import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = state => {
  return {
    productList: state.productList
  };
};

const ProductListContainer = connect(mapStateToProps)(ProductList);

export default ProductListContainer;
