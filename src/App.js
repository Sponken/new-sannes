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

    let filteredNonPizzaGroups = filterGroups(nonPizzaGroups, chosenFoodGroups, maxPrice)
    let filteredPizzaGroups = filterGroups(pizzaGroups, chosenFoodGroups, maxPrice)

    console.log("Max price is: "+maxPrice)

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


let filterGroups = (foodGroups, chosenFoodGroups, maxPrice) => {
    let filtered = []

    filtered = foodGroups.filter(g => {
        return chosenFoodGroups.includes(g.groupTitle)
    })

    //TODO Keep filtering on the other criteria
    if(maxPrice != "")
    filtered = filtered.map(g => {
        return {groupTitle: g.groupTitle,
            foods: g.foods.filter(foodItem => {
                                    return foodItem.price <= maxPrice}
                                    )}
    })

    return filtered
}


export default App