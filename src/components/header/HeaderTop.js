import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";

const HeaderTop = ({ borderStyle }) => {
  const currency = useSelector((state) => state.currency);
  return (
    <div
      className={clsx(
        "header-top-wap",
        borderStyle === "fluid-border" && "border-bottom"
      )}
    >
      <LanguageCurrencyChanger currency={currency} />
      <div className='header-offer'>
        <p>
          Gate no.02 vijay market Ansari road shastri park | 110053{" "}
          <span>
           
          </span>
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
