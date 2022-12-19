import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
type Props = {};

const Products = (props: Props) => {
  const jwelleryApi = `https://fakestoreapi.com/products/category/jewelery?limit=3`;
  const menClothingApi = `https://fakestoreapi.com/products/category/men's clothing?limit=3`;
  const womenClothingApi = `https://fakestoreapi.com/products/category/women's clothing?limit=3`;
  const electronicsApi = `https://fakestoreapi.com/products/category/electronics?limit=3`;

  const [products, setProducts] = useState<[][]>([]);

  useEffect(() => {
    fetch(jwelleryApi)
      .then((data) => data.json())
      .then((data) => setProducts((prevArray) => [data, ...prevArray]));

    fetch(menClothingApi)
      .then((data) => data.json())
      .then((data) => setProducts((prevArray) => [data, ...prevArray]));

    fetch(womenClothingApi)
      .then((data) => data.json())
      .then((data) => setProducts((prevArray) => [data, ...prevArray]));

    fetch(electronicsApi)
      .then((data) => data.json())
      .then((data) => setProducts((prevArray) => [data, ...prevArray]));
  }, []);
  return (
    <div className="pt-[100px] flex flex-col gap-[50px] items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold font-heading">
          Our <span className="text-red-600">Products</span>
        </h1>
        <div className="h-1 w-[60px] bg-red-500 "></div>
      </div>

      <div className="flex h-[300px] gap-10 ">
        {products[0]
          ? products[0].map((item) => (
              <ProductCard
                imageLink={item.image}
                title={item.title.slice(0, 20)}
                price={item.price}
              />
            ))
          : ""}
      </div>
      <div className="flex  items-center justify-center h-[300px] gap-10 ">
        {products[1]
          ? products[1].map((item) => (
              <ProductCard
                imageLink={item.image}
                title={item.title.slice(0, 20)}
                price={item.price}
              />
            ))
          : ""}
      </div>
      <div className="flex  items-center justify-center h-[300px] gap-10 ">
        {products[2]
          ? products[2].map((item) => (
              <ProductCard
                imageLink={item.image}
                title={item.title.slice(0, 20)}
                price={item.price}
              />
            ))
          : ""}
      </div>
      <div className="flex  items-center justify-center h-[300px] gap-10 ">
        {products[3]
          ? products[3].map((item) => (
              <ProductCard
                imageLink={item.image}
                title={item.title.slice(0, 20)}
                price={item.price}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default Products;
