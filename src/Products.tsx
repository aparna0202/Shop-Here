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
    <div className="pt-[100px]  flex flex-col gap-[50px] md:items-center justify-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold font-heading">
          Our <span className="text-red-600">Products</span>
        </h1>
        <div className="h-1 w-[40px] md:w-[60px] bg-red-500 "></div>
      </div>

      <div className="flex gap-5 md:gap-10  h-[200px] w-[400px] md:w-[900px] md:h-[300px] ">
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
      <div className="flex gap-5 md:gap-10 h-[200px] w-[400px] md:w-[900px] md:h-[300px]">
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
      <div className="flex gap-5 md:gap-10 h-[200px] w-[400px] md:w-[900px] md:h-[300px]">
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
      <div className="flex gap-5 md:gap-10 h-[200px] w-[400px] md:w-[900px] md:h-[300px]">
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
