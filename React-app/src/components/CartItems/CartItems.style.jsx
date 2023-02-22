import styled from "styled-components";

export const CartItemsWrapper = styled.div`
    width: 60%;
    border: 2px solid black;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 3%;
`

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 90%;

    img{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p{
        font-size: 24px;
    }
`

export const PriceContainer = styled.div`
    width: 10%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: 24px;
    }
`

export const CounterContainer = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-size: 24px;
    }
`