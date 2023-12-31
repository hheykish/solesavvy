import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Product.css';
export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card-p">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-p-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="p-row">
          <div className="price">₹{product.price}</div>
          <div>
            {product.seller && (
              <Link to={`/seller/${product.seller?._id}`}>
                {product.seller.seller.name}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
