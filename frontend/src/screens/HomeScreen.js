import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';
import './HomeScreen.css';
import { VideosSection } from "../components/VideosSection";


export default function HomeScreen() {

  const banners = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/drb7l3onb/image/upload/v1700062389/photos/cover1.jpg',  // Update the path to your first banner image
      productId: 'product1',  // Update with the actual product ID
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/drb7l3onb/image/upload/v1700062389/photos/cover2.jpg',  // Update the path to your second banner image
      productId: 'product2',  // Update with the actual product ID
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/drb7l3onb/image/upload/v1700062389/photos/cover3.jpg',  // Update the path to your third banner image
      productId: 'product3',  // Update with the actual product ID
    },
  ];

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
    {loadingSellers ? (
      <LoadingBox></LoadingBox>
    ) : errorSellers ? (
      <MessageBox variant="danger">{errorSellers}</MessageBox>
    ) : (
      <>
        {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
        <Carousel showArrows autoPlay showThumbs={false}>
      {banners.map((banner) => (
        <div key={banner.id}>
          <Link to={`/product/${banner.productId}`}>
            <img src={banner.image} alt={`Banner ${banner.id}`} />
            <div className="banner-content">
                  <Link to="search/name/" className="banner-button" style={{color:'black'}}>
                    Explore
                  </Link>
                </div>            </Link>
        </div>
      ))}
    </Carousel>
      <div className="home-page">
        <div className="hero">
          <VideosSection />
        </div>
      </div>
        </>
      )}
      <h2 className="featured-products-heading">Featured</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 ? (
            <MessageBox>No Product Found</MessageBox>
          ) : (
            <div className="row center">
              {console.log("Number of products:", products.length)}

              {products.map((product) => {
                console.log("Product details:", product);
                return <Product key={product._id} product={product}></Product>;
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
