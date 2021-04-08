import React from 'react'
import Carosel from "../components/Carosel";
// import Dropdown from "../components/Dropdown";
import ProductCard from "../components/ProductCard/ProductCard";
const Home = () => {
    return (
        <div>
            <Carosel />
            {/* <Dropdown /> */}
            <ProductCard />
        </div>
    )
}

export default Home
