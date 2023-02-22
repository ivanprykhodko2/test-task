import { Name, Price, ProductCardContainer, Footer } from './ProductCard.style.jsx';

import Button from '../Button/Button.jsx';

import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cartItems/cartItems.reducer.js';

const ProductCard = ({product}) => {

    const {imageUrl, name, price} = product;
    const dispatch = useDispatch();

    const onHandleAddItemToCart = () => {
        dispatch(addItemToCart(product))
    }

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />

            <Footer>
                <Name>{name}</Name>
                <Price>{price}$</Price>
            </Footer>

            <Button onClick={onHandleAddItemToCart}>Add to cart</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;