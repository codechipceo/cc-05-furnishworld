import React, { Fragment, useEffect } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderThirtyTwo from "../../wrappers/hero-slider/HeroSliderThirtyTwo";
import FeatureIconEight from "../../wrappers/feature-icon/FeatureIconEight";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
// import BlogFeaturedFive from "../../wrappers/blog-featured/BlogFeaturedFive";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import CtaTwo from "../../wrappers/cta/CtaTwo";
import { useTools } from "../../hooks/useTools";
import { getAllProducts, getDOM } from "../../thunk/thunkIndex";
import { useSelector } from "react-redux";

const HomeFurnitureSeven = () => {
  const { dispatch } = useTools();
  const { dOM } = useSelector((state) => state?.product);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(
      getDOM({
        reqQuery: { isDeal: true },
        sort: { updatedAt: -1 },
      })
    );
  }, []);
  const productImages  = dOM?.productImages ?? []
  console.log(productImages);

  return (
    <Fragment>
      <SEO
        titleTemplate="Furniture Home"
        description="Furniture home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderThirtyTwo spaceBottomClass="pb-100" />
        {/* feature icon */}
        <FeatureIconEight spaceBottomClass="pb-100" />
        {/* tab product */}
        <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />
        {/* call to action */}
        <CtaTwo spaceTopClass="pt-120" spaceBottomClass="pb-120" />
        {/* testimonial */}
        <TestimonialOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
        {/* countdown */}
        {
          dOM && dOM?.productImages?.length>0  &&
        <CountDownFive
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg={dOM?.productImages[0]}
          image={dOM?.productImages[1]}
          productId={dOM?._id}
        />
        }
        {/* blog post */}
        {/* <BlogFeaturedFive spaceTopClass="pt-100" spaceBottomClass="pb-70" /> */}
        {/* image slider */}
        <ImageSliderTwo />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureSeven;
