import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../thunk/thunkIndex";
import "./categoryShowcase.scss";
import SectionTitle from "../section-title/SectionTitle";

const CategoryCard = ({ imageUrl, categoryName }) => {
  return (
    <div className='categoryCard_container'>
      <div className='categoryCard_inner'>
        <img src={imageUrl} alt='' height={46} width={46} />
        <p>{categoryName}</p>
      </div>
    </div>
  );
};

export const CategoriesShowcase = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state?.category?.data);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  return (
    <div className='outer_container'>
      <SectionTitle
        titleText='Our Categories'
        positionClass='text-center'
        spaceClass='mb-60'
      />
      <div className='custom_container'>
        {categories?.map((eachItem) => {
          const { _id, categoryTitle, categoryImage } = eachItem;
          return (
            <CategoryCard
              key={_id}
              imageUrl={categoryImage}
              categoryName={categoryTitle}
            />
          );
        })}
      </div>
    </div>
  );
};
