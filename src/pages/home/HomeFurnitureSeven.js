import React, { Fragment, useEffect } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderThirtyTwo from "../../wrappers/hero-slider/HeroSliderThirtyTwo";
import FeatureIconEight from "../../wrappers/feature-icon/FeatureIconEight";
// import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
// import BlogFeaturedFive from "../../wrappers/blog-featured/BlogFeaturedFive";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import CtaTwo from "../../wrappers/cta/CtaTwo";
import { useTools } from "../../hooks/useTools";
import { getAllProducts } from "../../thunk/thunkIndex";
import { useSelector } from "react-redux";
import ProductSliderFive from "../../wrappers/product/ProductSliderFive";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

import SectionTitle from "../../components/section-title/SectionTitle";

import clsx from "clsx";
const HomeFurnitureSeven = () => {
  const { dispatch } = useTools();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { newArrived, saleItems, bestSellers } = useSelector(
    (state) => state.product
  );

  return (
    <Fragment>
      <SEO
        titleTemplate='Furniture Home'
        description='Furniture home of flone react minimalist eCommerce template.'
      />
      <LayoutOne
        headerContainerClass='container'
        headerPaddingClass='header-padding-1'
      >
        {/* hero slider */}
        <HeroSliderThirtyTwo spaceBottomClass='pb-100' />
        {/* feature icon */}
        <FeatureIconEight spaceBottomClass='pb-100' />
        {/* tab product */}
        {/* <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        /> */}
        <div className={clsx("product-area", "mb-25 ", "mb-25 ")}>
          <div className='container'>
            <SectionTitle
              titleText='New Arrival'
              positionClass='text-center'
              spaceClass='mb-60'
            />
            <ProductSliderFive
              // category={category}
              data={newArrived}
              type='newArrived'
              spaceBottomClass='mb-25 '
              productGridStyleClass='product-wrap-10--style2 product-wrap-10--style2--blue'
              // productGridStyleClass={productGridStyleClass}
            />
          </div>
        </div>

        <div className={clsx("product-area", "mb-25 ", "mb-25 ")} >
          <div className='container'>
            <SectionTitle
              titleText='Best Sellers'
              positionClass='text-center'
              spaceClass='mb-60'
            />
            <ProductSliderFive
              // category={category}
              data={bestSellers}
              type='bestSellers'
              spaceBottomClass='mb-25 '
              productGridStyleClass='product-wrap-10--style2 product-wrap-10--style2--blue'
              // productGridStyleClass={productGridStyleClass}
            />
          </div>
        </div>

        <div className={clsx("product-area", "mb-25 ", "mb-25 ")}>
          <div className='container my-20'>
            <SectionTitle
              titleText='Sale Items'
              positionClass='text-center'
              spaceClass='mb-60'
            />
            <ProductSliderFive
              // category={category}
              data={saleItems}
              type='saleItems'
              spaceBottomClass='mb-25 '
              productGridStyleClass='product-wrap-10--style2 product-wrap-10--style2--blue'
              // productGridStyleClass={productGridStyleClass}
            />
          </div>
        </div>

        {/* call to action */}
        <CtaTwo spaceTopClass='pt-120' spaceBottomClass='pb-120' />
        {/* testimonial */}
        <TestimonialOne spaceBottomClass='pb-95' spaceTopClass='pt-100' />
        {/* countdown */}
        <CountDownFive
          spaceTopClass='pt-115'
          spaceBottomClass='pb-115'
          bgImg='/assets/img/bg/bg-6.jpg'
          image='/assets/img/banner/deal-10.png'
          dateTime='November 13, 2023 12:12:00'
        />
        {/* blog post */}
        {/* <BlogFeaturedFive spaceTopClass="pt-100" spaceBottomClass="pb-70" /> */}
        {/* image slider */}
        <ImageSliderTwo />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureSeven;
