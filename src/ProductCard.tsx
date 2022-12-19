const ProductCard = ({ imageLink, title, price }) => {
  return (
    <div className="bg-[#d5d8d5] w-[300px] h-[300px] flex flex-col items-center justify-center border rounded-lg shadow-2xl gap-2">
      <img
        src={imageLink}
        alt=""
        className="h-[200px] w-[200px] border rounded-lg"
      />
      <h4 className="">{title}</h4>
      <h5>${price}</h5>
    </div>
  );
};

export default ProductCard;
