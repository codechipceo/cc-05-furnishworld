import { createRequest } from "../config/apiRequest";
import {
  GET_ALL_CATEGORIES,
  GET_ALL_PRODUCTS,
  PRODUCT_GET_BY_ID,
} from "./apiEndpoints";
import { asyncThunk } from "./asyncThunk";

//  ######################
//      PRODUCT THUNK
//  ######################

export const getAllProducts = asyncThunk("products/getAll", async (payload) => {
  return await createRequest(GET_ALL_PRODUCTS, payload);
});

export const getDOM = asyncThunk("products/dOM", async (payload) => {
  return await createRequest(GET_ALL_PRODUCTS, payload);
});

export const getProductById = asyncThunk("product/byid", async (payload) => {
  return await createRequest(PRODUCT_GET_BY_ID, payload);
});

export const getAllCategories = asyncThunk(
  "category/getall",
  async (payload) => {
    return await createRequest(GET_ALL_CATEGORIES, payload);
  }
);
