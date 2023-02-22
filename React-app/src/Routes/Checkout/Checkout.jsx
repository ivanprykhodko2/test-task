import { useSelector } from 'react-redux';

import CartItems from '../../components/CartItems/CartItems';

import { CheckoutWrapper } from './Checkout.style';

const Checkout = () => {
    const cartItems = useSelector(state => state.cartItems.cartItems);

    const TotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)

    console.log(cartItems)
    return (
        <CheckoutWrapper>
            {cartItems.map(cartItem=><CartItems key={cartItem.id} cartItem={cartItem}/>)}
            <div>
                <h1>
                    Total: {`${TotalPrice}$`}
                </h1>
            </div>
        </CheckoutWrapper>
    );
};

export default Checkout;