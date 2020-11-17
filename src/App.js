import React, {useState} from 'react'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, pref, testFood, nonPizzaGroups, pizzaGroups} from "./mockData";

const App = () => {
    const [maxPrice, setMaxPrice] = useState("");

    const [wantedIngredients, setWantedIngredients] = useState([]);
    const [unwantedIngredients, setUnwantedIngredients] = useState([]);

    const [chosenFoodGroups, setChosenFoodGroups] = useState(groupTitles)
    const [foodPref, setFoodPref] = useState([]);

    let filteredNonPizzaGroups = filterGroups(nonPizzaGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref)
    let filteredPizzaGroups = filterGroups(pizzaGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref)

    return <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column alignItems='center'>
                    <Filter groupNames={groupTitles}
                            chosenFoodGroups={{value: chosenFoodGroups, setter: setChosenFoodGroups}} prefNames={pref}
                            chosenFoodPref={{value: foodPref, setter: setFoodPref}} ingredients={testFood.ingredients}
                            maxPrice={{value: maxPrice, setter: setMaxPrice}}
                            wantedIngredients={{value: wantedIngredients, setter: setWantedIngredients}}
                            unwantedIngredients={{value: unwantedIngredients, setter: setUnwantedIngredients}}/>
                    {chosenFoodGroups.includes("Pizza")
                        ? <Menu foodGroups={filteredPizzaGroups}/>
                        : null}
                    <Menu foodGroups={filteredNonPizzaGroups}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}

let filterGroups = (foodGroups, chosenFoodGroups, maxPrice, wantedIngredients, unwantedIngredients, foodPref) => {
    let filtered = []

    filtered = foodGroups.filter(f => {
        // Need to check that pizza is a substring of pizzagrupp.
        // Hence weird looking line below.
        return chosenFoodGroups.some(c => f.groupTitle.includes(c))
    })

    if (maxPrice !== "")
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
                return (foodPref.includes("veg") && f.veg || !foodPref.includes("veg")) &&
                    (foodPref.includes("stark") && f.spicy || !foodPref.includes("stark")) &&
                    (foodPref.includes("inbakad") && f.type === "baked" || !foodPref.includes("inbakad"))
            })
        }
    })


    return filtered
}


export default App