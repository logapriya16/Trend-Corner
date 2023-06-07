import React, { createContext, useEffect, useState } from "react";
export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filters, SetFilters] = useState({
    serachInput: "",
    rangeInput: 100000,
    categoryInput: [],
    ratingInput: "",
    occationInput: [],
    sizeInput: [],
    sortInput: "",
  });

  //api call for getting products from db
  const getFilterProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const obj = await response.json();
      const temp = obj.products;
      setProducts(temp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFilterProducts();
  }, []);
  const HandleSearch = (e) => {
    SetFilters((filters) => ({ ...filters, serachInput: e }));
  };
  const HandleRange = (e) => {
    SetFilters((filters) => ({ ...filters, rangeInput: e.target.value }));
  };
  const HandleCategory = (e) => {
    SetFilters((filters) => ({
      ...filters,
      categoryInput: filters.categoryInput.includes(e)
        ? filters.categoryInput.filter((item) => item !== e)
        : [...filters.categoryInput, e],
    }));
  };
  const HandleRating = (e) => {
    SetFilters((filters) => ({ ...filters, ratingInput: e.target.value }));
  };

  const HandleOccation = (e) => {
    SetFilters((filters) => ({
      ...filters,
      occationInput: filters.occationInput.includes(e.target.value)
        ? filters.occationInput.filter((item) => item !== e.target.value)
        : [...filters.occationInput, e.target.value],
    }));
  };
  const HandleSize = (e) => {
    SetFilters((filters) => ({
      ...filters,
      sizeInput: filters.sizeInput.includes(e.target.value)
        ? filters.sizeInput.filter((item) => item !== e.target.value)
        : [...filters.sizeInput, e.target.value],
    }));
    console.log(e.target.value);
  };
  //console.log(filters);
  const HandleSort = (e) => {
    SetFilters((filters) => ({ ...filters, sortInput: e }));
  };

  const HandleClear=()=>{
    SetFilters((filters)=>({...filters,serachInput: "",
    rangeInput: 0,
    categoryInput: [],
    ratingInput: "",
    occationInput: [],
    sizeInput: [],
    sortInput: ""}))
  }
  const SearchSort =
    filters.serachInput.length > 0
      ? products.filter((item) =>
          item.name.toLowerCase().includes(filters.serachInput.toLowerCase())
        )
      : products;

  const RangeSort =
    filters.rangeInput
      ? SearchSort.filter((item) => {
        if(item.price <= filters.rangeInput){
          console.log(item.price)
          console.log(filters.rangeInput)
          return true
        }
      })
      : SearchSort;

  const CategorySort =
    filters.categoryInput.length > 0
      ? RangeSort.filter((item) => {
          if (
            item.categoryName === "kurtha" &&
            filters.categoryInput.includes("kurtha")
          ) {
            return true;
          }
          if (
            item.categoryName === "t-shirts" &&
            filters.categoryInput.includes("t-shirts")
          ) {
            return true;
          }
          
          if (
            item.categoryName === "jumpsuits" &&
            filters.categoryInput.includes("jumpsuits")
          ) {
            return true;
          }
          if (
            item.categoryName === "gowns" &&
            filters.categoryInput.includes("gowns")
          ) {
            return true;
          }
        })

      : RangeSort;

  const RatingSort =
    filters.ratingInput === "1"
      ? [...CategorySort].filter((item) => {
          if (item.rating >= 1) {
            return true;
          }
        })
      : filters.ratingInput === "2"
      ? [...CategorySort].filter((item) => {
          if (item.rating >= 2) {
            return true;
          }
        })
      : filters.ratingInput === "3"
      ? [...CategorySort].filter((item) => {
          if (item.rating >= 3) {
            return true;
          }
        })
      : filters.ratingInput === "4"
      ? [...CategorySort].filter((item) => {
          if (item.rating >= 4) {
            return true;
          }
        })
      : CategorySort;

  const OccationSort =
    filters.occationInput.length > 0
      ? RatingSort.filter((item) => {
          if (
            filters.occationInput.includes("ceremony") &&
            item.occation === "ceremony"
          ) {
            return true;
          }
          if (
            filters.occationInput.includes("casual") &&
            item.occation === "casual"
          ) {
            return true;
          }
        })
      : RatingSort;

  const SizeSort =
    filters.sizeInput.length > 0
      ? [...OccationSort].filter((item) => {
          if (filters.sizeInput.includes("S") && item.size === "S") {
            return true;
          }
          if (filters.sizeInput.includes("M") && item.size === "M") {
            return true;
          }
          if (filters.sizeInput.includes("L") && item.size === "L") {
            return true;
          }
          if (filters.sizeInput.includes("XL") && item.size === "XL") {
            return true;
          }
          if (filters.sizeInput.includes("XXL") && item.size === "XXL") {
            return true;
          }
        })
      : OccationSort;

  const PriceSort =
    filters.sortInput === "asc"
      ? [...SizeSort].sort((a, b) => a.price - b.price)
      : filters.sortInput === "des"
      ? [...SizeSort].sort((a, b) => b.price - a.price)
      : SizeSort;
  return (
    <FilterContext.Provider
      value={{
        products,
        getFilterProducts,
        filters,
        HandleSearch,
        HandleRange,
        HandleCategory,
        HandleRating,
        HandleOccation,
        HandleSize,
        HandleSort,
        PriceSort,
        HandleClear
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
