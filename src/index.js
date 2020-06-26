import React from 'react'
import ReactDOM from 'react-dom'
import FoodCard from "./components/FoodCard.jsx"
import {DigitLayout, DigitHeader, DigitProviders} from "@cthit/react-digit-components";
import FoodGroup from "./components/FoodGroup";

const testFood = {
    title: "pizza",
    price: 10,
    ingredients: ["Skinka", "lök", "jalapeño", "kyckling", "köttfärs", "bacon", "oxfilé", "mozzarellaost", "stark vitlökssås"]
}

const testGroup = {
    groupTitle: "Testgroup",
    foods: [Array(5).fill(testFood)]
}

const testMenu = {
    groups: [Array(3).fill(testGroup)]
}

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <div>
                    <FoodGroup foods={Array(5).fill(testFood)} groupTitle="Foodgroup test"/>
                    <FoodGroup foods={Array(5).fill(testFood)} groupTitle="Foodgroup test"/>
                </div>
            )
            }
        />
    </DigitProviders>,
    document.getElementById("root")
);