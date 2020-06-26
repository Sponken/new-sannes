import React from 'react'
import ReactDOM from 'react-dom'
import FoodCard from "./components/FoodCard.jsx"
import {DigitLayout, DigitHeader, DigitProviders} from "@cthit/react-digit-components";
import FoodGrid from "./components/FoodGrid";

const testFood = {
    title: "pizza",
    price: "10kr",
    ingredients: ["Skinka", "lök", "jalapeño", "kyckling", "köttfärs", "bacon", "oxfilé", "mozzarellaost", "stark vitlökssås"]
}

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <FoodGrid foods={Array(5).fill(testFood)}/>
            )
                }
        />
    </DigitProviders>,
    document.getElementById("root")
);