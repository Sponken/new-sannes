import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter";
import { DigitHeader, DigitProviders, DigitLayout, DigitSelect } from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import { groupTitles, pref, foodGroups, ingredients } from "./dataManagement";
import './styles.css'

const App = () => {
    const sortBy = { groups: "Grupper", priceAsc: "Pris stigande", priceDec: "Pris fallande" }

    const [maxPrice, setMaxPrice] = useState("");

    const [chosenSort, setChosenSort] = useState("groups")

    const [searchTerm, setSearchTerm] = useState("")

    const [wantedIngredients, setWantedIngredients] = useState([]);
    const [unwantedIngredients, setUnwantedIngredients] = useState([]);

    const [chosenFoodGroups, setChosenFoodGroups] = useState(groupTitles)
    const [foodPref, setFoodPref] = useState([]);
    

    let filteredFoodGroups = filterGroups(foodGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref, searchTerm, chosenSort)


    return <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column id="everything">
                    <Filter groupNames={groupTitles}
                        chosenFoodGroups={{ value: chosenFoodGroups, setter: setChosenFoodGroups }} prefNames={pref}
                        chosenFoodPref={{ value: foodPref, setter: setFoodPref }} ingredients={ingredients}
                        maxPrice={{ value: maxPrice, setter: setMaxPrice }}
                        wantedIngredients={{ value: wantedIngredients, setter: setWantedIngredients }}
                        unwantedIngredients={{ value: unwantedIngredients, setter: setUnwantedIngredients }}
                        searchTerm={{ value: searchTerm, setter: setSearchTerm }} />
                    <DigitSelect valueToTextMap={sortBy} value={chosenSort} onChange={e => {
                        setChosenSort(e.target.value)
                    }} />
                    <Menu foodGroups={filteredFoodGroups} />
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}


const sortDropDown = (filtered, sortAsc) => {

    let sortedFoods = { groupTitle: "Resultat:", foods: [] }

    filtered.forEach(group => {
        sortedFoods.foods.push(...group.foods)
    });

    sortedFoods.foods.sort((f1, f2) => f1.price - f2.price)

    if (!sortAsc)
        sortedFoods.foods.reverse()
    return [sortedFoods]

}


let filterGroups = (foodGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref, searchTerm, sortBy) => {
    let filtered = []

    filtered = foodGroups.filter(g => {
        // Need to check that pizza is a substring of pizzagrupp.
        // Hence weird looking line below.
        return chosenFoodGroups.some(c => g.groupTitle.includes(c))
    })

    filtered = filtered.map(g => {
        return {
            groupTitle: g.groupTitle,
            foods: g.foods.filter(f => {
                if (foodPref.includes("veg") && !f.veg)
                    return false
                if (foodPref.includes("stark") && !f.spicy)
                    return false
                if (foodPref.includes("inbakad") && f.type !== "baked")
                    return false
                if (foodPref.includes("utan jordnötter") && f.peanut)
                    return false
                if (maxPrice != "" && f.price > maxPrice)
                    return false

                return wantedIngredients.every(i => f.ingredients.includes(i))
                    && unwantedIngredients.every(i => !f.ingredients.includes(i))
                    && f.title.toLowerCase().includes(searchTerm.toLowerCase())

            })
        }
    })


    if (sortBy === "groups")
        return filtered
    return sortDropDown(filtered, sortBy === "priceAsc")

}


export default App