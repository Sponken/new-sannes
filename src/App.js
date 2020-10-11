import React, {useState} from 'react'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, pref, testFood, nonPizzaGroups, pizzaGroups} from "./mockData";

const App = () => {
    const [maxPrice, setMaxPrice] = useState();

    const [wantedIngredients, setWantedIngredients] = useState([]);
    const [unwantedIngredients, setUnwantedIngredients] = useState([]);

    const [chosenFoodGroups, setChosenFoodGroups] = useState(groupTitles)
    const [foodPref, setFoodPref] = useState([]);

    let filteredNonPizzaGroups = filterGroups(nonPizzaGroups, chosenFoodGroups)
    console.log(filteredNonPizzaGroups)

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
                    <Menu foodGroups={pizzaGroups}/>
                    <Menu foodGroups={filteredNonPizzaGroups}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}


let filterGroups = (foodGroups, chosenFoodGroups) => {
    let filtered = []

    foodGroups.map(g => {
            if (chosenFoodGroups.includes(g.groupTitle)) {
               filtered.push(g)
            }

        }
    )
    //TODO Keep filtering on the other criteria

    return filtered
}


export default App