import React from 'react';

// import PropTypes from 'prop-types';
import Brands from '../../features/Brands/BrandsContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedbackContainer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import Gallery from '../../features/Gallery/GalleryContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotedProduct from '../../features/PromotedProduct/PromotedProductContainer';
import SalesContainer from '../../features/Sales/SalesContainer';

import styles from './Homepage.module.scss';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedProduct />
    <FeatureBoxes />
    <SalesContainer />
    <NewFurniture />
    <Gallery />
    <LatestBlog />
    <Brands />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
