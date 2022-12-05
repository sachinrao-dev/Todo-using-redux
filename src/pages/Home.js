import React from "react";
import Products from "../compenents/Products";

function Home() {
return(
    <div>
        <h1>Welcome to redux toolkit</h1>
        <section>
            <h3> Products</h3>
            <Products />
        </section>
    </div>
)
}

export default Home;