import { Fragment, useState, useEffect } from "react";
import Paginator from "react-hooks-paginator";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopSidebar from "../../wrappers/product/ShopSidebar";
import ShopTopbar from "../../wrappers/product/ShopTopbar";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { useTools } from "../../hooks/useTools";
import { getAllCategories, getAllProducts } from "../../thunk/thunkIndex";

const ShopGridStandard = () => {
  const [layout, setLayout] = useState("grid three-column");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // data fetched from backend
  const { products, data , count} = useSelector((state) => state?.product);
  const { data: category } = useSelector((state) => state.category);

  const [categoryFilter, setCategoryFilter] = useState("");
  const  [limit, setLimit] = useState(9)
  const  [skip, setSkip] = useState(0)

  let { pathname } = useLocation();

  const getLayout = (layout) => {
    setLayout(layout);
  };

  const getSortParams = (categoryId) => {
    setCategoryFilter(categoryId);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const { dispatch } = useTools();
  useEffect(() => {
    dispatch(
      getAllProducts({
        categoryId: categoryFilter,
        limit: limit,
        skip: offset,
      })
    );
  }, [categoryFilter, dispatch, limit, offset]);

  useEffect(() => {
    dispatch(getAllCategories());

  },[dispatch])

  useEffect(() => {
    setCurrentData(data);
  }, [data]);

  //   useEffect(() => {
  //     let sortedProducts = getSortedProducts(products, sortType, sortValue);
  //     const filterSortedProducts = getSortedProducts(
  //       sortedProducts,
  //       filterSortType,
  //       filterSortValue
  //     );
  //     sortedProducts = filterSortedProducts;
  //     setSortedProducts(sortedProducts);
  //     // setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  //   }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <Fragment>
      <SEO titleTemplate='Shop Page' description='Shop page of Furnishworld' />

      <LayoutOne headerTop='visible'>
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Shop", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <div className='shop-area pt-95 pb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 order-2 order-lg-1'>
                {/* shop sidebar */}
                <ShopSidebar
                  category={category}
                  getSortParams={getSortParams}
                  sideSpaceClass='mr-30'
                />
              </div>
              <div className='col-lg-9 order-1 order-lg-2'>
                {/* shop topbar default */}
                <ShopTopbar
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={count}
                  sortedProductCount={currentData.length}
                />

                {/* shop page content default */}
                {currentData ? (
                  <ShopProducts layout={layout} products={currentData} />
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
                    <img
                      src='/assets/img/logo/loading.gif'
                      alt='loading'
                      width={40}
                    />
                  </div>
                )}

                {/* shop product pagination */}
                <div className='pro-pagination-style text-center mt-30'>
                  <Paginator
                    totalRecords={count}
                    pageLimit={limit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass='mb-0 mt-0'
                    pagePrevText='«'
                    pageNextText='»'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default ShopGridStandard;
