import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getProductsFetch } from "../../store/product/product.reducer";

import ProductCard from "../../components/ProductCard/ProductCard";

import { HomeWrapper, ProductsConatiner } from "./Home.style";

const Home = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsFetch());
    }, [])

    return (
        <HomeWrapper>
            <ProductsConatiner>
                {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </ProductsConatiner>
        </HomeWrapper>
    );
};

export default Home;