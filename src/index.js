import React from 'react'
import ReactDOM from 'react-dom'
import FoodCard from "./components/FoodCard.jsx"
import {DigitButton, DigitHeader, DigitProviders} from "@cthit/react-digit-components";

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <FoodCard title="Pizza" price="10kr"/>
            )}
        />
    </DigitProviders>,
    document.getElementById("root")
);