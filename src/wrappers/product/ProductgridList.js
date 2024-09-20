import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";

const ProductGridList = ({
  products,
  spaceBottomClass
}) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  return (
    <Fragment>
      {products.length > 0 ? (
        products?.map((product) => {
          return (
            <div className='col-xl-4 col-sm-6' key={product._id}>
              <ProductGridListSingle
                spaceBottomClass={spaceBottomClass}
                product={product}
                currency={currency}
                cartItem={cartItems.find(
                  (cartItem) => cartItem.id === product.id
                )}
                wishlistItem={wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                )}
                compareItem={compareItems.find(
                  (compareItem) => compareItem.id === product.id
                )}
              />
            </div>
          );
        })
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100wv",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src='/assets/img/logo/loading.gif' alt='loading' width={40} />
        </div>
      )}
    </Fragment>
  );
};

ProductGridList.propTypes = {
  products: PropTypes.array,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridList;
