import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

interface ProductProps {
  id: number;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{name}</h2>
      <p>R$ {price}</p>
      <button onClick={() => dispatch(addItem({ id, name, price }))}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;
