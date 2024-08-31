import { useEffect, useState } from "react";
import { useTools } from "../../hooks/useTools";
import { getAllProducts } from "../../thunk/thunkIndex";


const ShopSearch = () => {

  const [search, setSearch] = useState("")

  const { dispatch } = useTools()
  useEffect(() => {

    dispatch(getAllProducts())
  }, [search])

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">Search </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" action="#">
          <input type="text" placeholder="Search here..."  onChange={(e) =>{setSearch(e.target.value)}}/>
          <button>
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
