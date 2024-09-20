import PropTypes from "prop-types";
import clsx from "clsx";
import ProductgridList from "./ProductgridList";

const ShopProducts = ({ products, layout }) => {
  return (
    <div className='shop-bottom-area mt-35'>
      <div className={clsx("row", layout)}>
        {products ? (
          <ProductgridList products={products} spaceBottomClass='mb-25' />
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
      </div>
    </div>
  );
};

ShopProducts.propTypes = {
  layout: PropTypes.string,
  products: PropTypes.array
};

export default ShopProducts;
