import React from 'react'
import ReactDOM from 'react-dom'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders} from "@cthit/react-digit-components";
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

const pref = ["Veg", "Stark", "Inbakad"]

const groupTitles = () => {
    const result = []
    testMenu.forEach(g => result.push(g.groupTitle))
    return result
}

const options = [{
    text: "The Dark Knight Rises",
    value: "the_dark"
}, {
    text: "Princess Mononoke",
    value: "princess"
}, {
    text: "Aliens",
    value: "aliens"
}, {
    text: "Oldboy",
    value: "oldboy"
}, {
    text: "Once Upon a Time in America",
    value: "once"
}, {
    text: "Witness for the Prosecution",
    value: "Witness"
}, {
    text: "Das Boot",
    value: "das",
    disabled: true
}];

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <div>
                    <Filter groupNames={groupTitles()} prefNames={pref} ingredients={options}/>
                    <Menu foodGroups={testMenu}/>
                </div>
            )}
        />
    </DigitProviders>,
    document.getElementById("root")
);