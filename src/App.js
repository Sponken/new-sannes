import React, {useState} from 'react'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, pref, testFood, nonPizzaGroups, pizzaGroups} from "./mockData";
import './styles.css'

const App = () => {
    const [maxPrice, setMaxPrice] = useState("");

    const [searchTerm, setSearchTerm] = useState("")

    const [wantedIngredients, setWantedIngredients] = useState([]);
    const [unwantedIngredients, setUnwantedIngredients] = useState([]);

    const [chosenFoodGroups, setChosenFoodGroups] = useState(groupTitles)
    const [foodPref, setFoodPref] = useState([]);

    let filteredNonPizzaGroups = filterGroups(nonPizzaGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref, searchTerm)
    let filteredPizzaGroups = filterGroups(pizzaGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref, searchTerm)

    return <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column id="everything">
                    <Filter groupNames={groupTitles}
                            chosenFoodGroups={{value: chosenFoodGroups, setter: setChosenFoodGroups}} prefNames={pref}
                            chosenFoodPref={{value: foodPref, setter: setFoodPref}} ingredients={testFood.ingredients}
                            maxPrice={{value: maxPrice, setter: setMaxPrice}}
                            wantedIngredients={{value: wantedIngredients, setter: setWantedIngredients}}
                            unwantedIngredients={{value: unwantedIngredients, setter: setUnwantedIngredients}}
                            searchTerm = {{value: searchTerm, setter: setSearchTerm}}/>
                    {chosenFoodGroups.includes("Pizza")
                        ? <Menu foodGroups={filteredPizzaGroups}/>
                        : null}
                    <Menu foodGroups={filteredNonPizzaGroups}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}

let filterGroups = (foodGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref, searchTerm) => {
    let filtered = []

    filtered = foodGroups.filter(f => {
        // Need to check that pizza is a substring of pizzagrupp.
        // Hence weird looking line below.
        return chosenFoodGroups.some(c => f.groupTitle.includes(c))
    })

    filtered = filtered.map( g => {
        return {
            groupTitle: g.groupTitle,
            foods: g.foods.filter(foodItem => {
                return foodItem.title.toLowerCase().includes(searchTerm.toLowerCase())
            })
        }
    })

        if(maxPrice != "")
            filtered = filtered.map(g => {
                return {
                    groupTitle: g.groupTitle,
                    foods: g.foods.filter(foodItem => {
                        return foodItem.price <= maxPrice
                    }
                )
            }
        })

    filtered = filtered.map(g => {
        return {
            groupTitle: g.groupTitle,
            foods: g.foods.filter(f => {
                return wantedIngredients.every(i => f.ingredients.includes(i))
            })
        }
    })

    filtered = filtered.map(g => {
        return {
            groupTitle: g.groupTitle,
            foods: g.foods.filter(f => {
                return unwantedIngredients.every(i => !f.ingredients.includes(i))
            })
        }
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

                return true
            })
        }
    })


    return filtered
}


export default App