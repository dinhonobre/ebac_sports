import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeItem, clearCart } from "../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <span>{item.name} - R$ {item.price}</span>
            <button onClick={() => dispatch(removeItem(item.id))}>Remover</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Esvaziar Carrinho</button>
      )}
    </div>
  );
};

export default Cart;
