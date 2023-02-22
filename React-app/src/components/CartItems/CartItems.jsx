import { ProductContainer, CartItemsWrapper, PriceContainer, CounterContainer } from "./CartItems.style";
import { addItemToCart, removeItemsFromCart } from "../../store/cartItems/cartItems.reducer";

import { useDispatch } from "react-redux";
import Button from "../Button/Button";

const CartItems = ({cartItem}) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const dispatch = useDispatch();

    const increaseProductQuantity = () => {
        dispatch(addItemToCart(cartItem));
    }
    const reduceProductQuantity = () => {
        dispatch(removeItemsFromCart(cartItem));
    }
    return (
        <CartItemsWrapper>
            <ProductContainer>
                <img src={imageUrl} alt={`${name}`} />
                <p>{name}</p>
            </ProductContainer>

            <PriceContainer>
                <p>{price}$</p>
            </PriceContainer>

            <CounterContainer>
                <button onClick={reduceProductQuantity}>-</button>
                <p>{quantity}</p>
                <button onClick={increaseProductQuantity}>+</button>
            </CounterContainer>
        </CartItemsWrapper>
    );
};

export default CartItems;