import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { getProducts } from "../../helpers/product";
import ProductGridSingleEleven from "../../components/product/ProductGridSingleEleven";
import { useEffect } from "react";
import { useTools } from "../../hooks/useTools";
import { getAllProducts } from "../../thunk/thunkIndex";

const settings = {
  loop: false,
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

const ProductSliderFive = ({
  spaceBottomClass,
  category,
  productGridStyleClass,
  type,
  data,
}) => {
  const { products } = useSelector((state) => state.product);
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products, category, type, 6);

  const { dispatch } = useTools();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  // if(!prods?.length) return <p>No Products Found</p>

  return (
    <>
      {data ? (
        <div
          className={clsx("related-product-area", spaceBottomClass)}
          style={{ height: "550px" }}
        >
          <Swiper options={settings}>
            {data.map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <ProductGridSingleEleven
                    spaceBottomClass={spaceBottomClass}
                    productGridStyleClass={productGridStyleClass}
                    product={product}
                    currency={currency}
                    // cartItem={
                    //   cartItems.find((cartItem) => cartItem.id === product.id)
                    // }
                    // wishlistItem={
                    //   wishlistItems.find(
                    //     (wishlistItem) => wishlistItem.id === product.id
                    //   )
                    // }
                    // compareItem={
                    //   compareItems.find(
                    //     (compareItem) => compareItem.id === product.id
                    //   )
                    // }
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : null}
    </>
  );
};

ProductSliderFive.propTypes = {
  category: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductSliderFive;
