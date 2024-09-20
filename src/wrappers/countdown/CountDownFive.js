import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

const CountDownFive = ({
  spaceTopClass,
  spaceBottomClass,
  bgImg,
  image,
  productId,
}) => {

  console.log( image)
  return (
    <div
      className={clsx("funfact-area", spaceTopClass, spaceBottomClass)}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-md-5">
            <div className="funfact-content funfact-content--style2 text-center">
              <h2>Deal of the Month</h2>
              <div className="timer mb-md-5">
                <h3 className="animated">Enjoy This Offer Today</h3>
              </div>
              <div className="funfact-btn funfact-btn-brown btn-hover ">
                <Link to={process.env.PUBLIC_URL + "/product/" + productId}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="funfact-image text-center text-lg-end" >
              <img
                style={{maxHeight:"550px"}}
                src={process.env.PUBLIC_URL + image}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownFive.propTypes = {
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default CountDownFive;
