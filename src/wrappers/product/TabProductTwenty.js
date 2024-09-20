import PropTypes from "prop-types";
import clsx from "clsx";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductSliderFive from "./ProductSliderFive";
import { useSelector } from "react-redux";

const TabProductTwenty = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass,
}) => {
  const { newArrived, saleItems, bestSellers } = useSelector(
    (state) => state.product
  );

  return (
    <div className={clsx("product-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <Nav
          variant="pills"
          className={`product-tab-list-7 justify-content-center mb-60 ${
            productTabClass ? productTabClass : ""
          }`}
        >
          <Nav.Item>
            <Nav.Link eventKey="newArrival">
              <h4>New Arrivals</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="bestSellers">
              <h4>Best Sellers</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="saleItems">
              <h4>Sale Items</h4>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="newArrival">
            <ProductSliderFive
              category={category}
              data={newArrived}
              type="newArrived"
              spaceBottomClass="mb-25"
              productGridStyleClass={productGridStyleClass}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="bestSellers">
            <ProductSliderFive
              category={category}
              data={bestSellers}
              type="bestSellers"
              spaceBottomClass="mb-25"
              productGridStyleClass={productGridStyleClass}
            />
          </Tab.Pane>
          <Tab.Pane eventKey="saleItems">
            <ProductSliderFive
              data={saleItems}
              category={category}
              type="saleItems"
              spaceBottomClass="mb-25"
              productGridStyleClass={productGridStyleClass}
            />
          </Tab.Pane>
        </Tab.Content>
      </div>
    </div>
  );
};

TabProductTwenty.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProductTwenty;
