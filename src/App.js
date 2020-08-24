import React, {useState} from 'react'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, options, pref, testMenu, testFood} from "./data";

const App = () => {
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const [wantedIngredients, setWantedIngredients] = useState([]);
    const [unwantedIngredients, setUnwantedIngredients] = useState([]);

    const [foodGroups, setFoodGroups] = useState(["Testgroup"]);
    const [foodPref, setFoodPref] = useState(["Veg"]);


    return <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column alignItems='center'>
                    <Filter groupNames={groupTitles} chosenFoodGroups={foodGroups} prefNames={pref}
                            chosenFoodPref={foodPref} ingredients={testFood.ingredients}
                            minPrice={{value: minPrice, setter: setMinPrice}}
                            maxPrice={{value: maxPrice, setter: setMaxPrice}}
                            wantedIngredients={{value: wantedIngredients, setter: setWantedIngredients}}
                            unwantedIngredients={{value: unwantedIngredients, setter: setUnwantedIngredients}}/>
                    <Menu foodGroups={testMenu}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}

export default App