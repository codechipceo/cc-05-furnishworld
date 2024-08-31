import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import { useTools } from "../../hooks/useTools";
import { getProductById } from "../../thunk/thunkIndex";

const Product = () => {
  let { pathname } = useLocation();
  let { id } = useParams();
  const { products, productById } = useSelector((state) => state.product);
  // const product = products.find(product => product.id === id);
  const { productTitle, productDescription, price, salePrice, productImages } =
    productById;
  const images =  productImages?.map((imgObj) => imgObj.imageUrl)
  const product = {
    name: productTitle,
    fullDescription: productDescription,
    shortDescription: productDescription,
    price,
    image: images

  };
  const { dispatch } = useTools();
  useEffect(() => {
    dispatch(getProductById({ productId: id }));
  }, [id]);

  return (
    <Fragment>
      <SEO
        titleTemplate='Product Page'
        description='Product Page of flone react minimalist eCommerce template.'
      />
      {productById._id ? (
        <LayoutOne headerTop='visible'>
          {/* breadcrumb */}
          <Breadcrumb
            pages={[
              { label: "Home", path: process.env.PUBLIC_URL + "/" },
              {
                label: "Shop Product",
                path: process.env.PUBLIC_URL + pathname,
              },
            ]}
          />

          {/* product description with image */}
          <ProductImageDescription
            spaceTopClass='pt-100'
            spaceBottomClass='pb-100'
            product={product}
          />

          {/* product description tab */}
          <ProductDescriptionTab
            spaceBottomClass='pb-90'
            productFullDesc={product.fullDescription}
          />

          {/* related product slider */}
          {/* <RelatedProductSlider
            spaceBottomClass='pb-95'
            category={product.category[0]}
          /> */}
        </LayoutOne>
      ) : (
        "No product exist"
      )}
    </Fragment>
  );
};

export default Product;
