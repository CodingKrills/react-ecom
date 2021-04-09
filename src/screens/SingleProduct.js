import React from 'react'

import SingleProdutCard from "../components/ProductCard/SingleProdutCard";
import SingleBottomButtons from "../components/BottomButtom/SingleBottomButtons";

const SingleProduct = () => {
    return (
        <>
            <div style={{ marginTop: "5%" }}>
                <SingleProdutCard />
            </div>
            <SingleBottomButtons />
        </>
    )
}

export default SingleProduct
