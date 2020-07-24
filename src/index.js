import React from 'react'
import ReactDOM from 'react-dom'
import FoodCard from "./components/FoodCard.jsx"
import {DigitLayout, DigitHeader, DigitProviders} from "@cthit/react-digit-components";
import FoodGroup from "./components/FoodGroup";
import Menu from "./components/Menu";

const id = 0

const testFood = {
    title: "pizza",
    price: 10,
    ingredients: ["Skinka", "lök", "jalapeño", "kyckling", "köttfärs", "bacon", "oxfilé", "mozzarellaost", "stark vitlökssås"]
}

const testGroup1 = {
    groupTitle: "Testgroup",
    foods: Array(3).fill(testFood)
}

const testGroup2 = {
    groupTitle: "Testgroup2",
    foods: Array(7).fill(testFood)
}
const testMenu = [testGroup1, testGroup2]

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <div>
                    <Menu foodGroups={testMenu}/>
                </div>
            )}
        />
    </DigitProviders>,
    document.getElementById("root")
);