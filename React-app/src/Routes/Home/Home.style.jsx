import styled from "styled-components";

export const HomeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

`

export const ProductsConatiner = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    -webkit-column-gap: 20px;
    column-gap: 20px;
    row-gap: 50px;
`