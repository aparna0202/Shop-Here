import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategorisedProducts = () => {
  const { cat } = useParams();
  const [data, setData] = useState([]);

  const api = `https://fakestoreapi.com/products/category/${cat}`;
  console.log(cat);
  console.log(api);

  useEffect(() => {
    fetch(api)
      .then((data) => data.json())
      .then((data) => setData(data));
  }, [cat]);

  return (
    <div className="pt-[100px] flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-bold font-heading">
        {cat[0].toUpperCase() + cat?.substring(1)}
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {data
          ? data.map((item) => (
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

export default CategorisedProducts;
