type Props = {
  imageLink: string;
  title: string;
  price: string;
};

const ProductCard = ({ imageLink, title, price }: Props) => {
  return (
    <div className="bg-[#d5d8d5] md:w-[300px] md:h-[300px] text-sm flex flex-col items-center justify-center border rounded-lg shadow-2xl gap-2">
      <img
        src={imageLink}
        alt=""
        className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] border rounded-lg"
      />
      <h4 className="">{title}</h4>
      <h5>${price}</h5>
    </div>
  );
};

export default ProductCard;
