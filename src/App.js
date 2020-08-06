import React, {useState} from 'react'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, options, pref, testMenu, testFood} from "./data";

const App = () => {
    const [minPrice, setMinPrice] = useState(40);
    const [maxPrice, setMaxPrice] = useState(2000);

    const [addIngredients, setAddIngredients] = useState(["lök"]);
    const [removeIngredients, setRemoveIngredients] = useState(["bacon"]);

    const [foodGroups, setFoodGroups] = useState(["Testgroup"]);
    const [foodPref, setFoodPref] = useState(["Veg"]);


    return <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column alignItems='center'>
                    <Filter groupNames={groupTitles} chosenFoodGroups={foodGroups} prefNames={pref} chosenFoodPref={foodPref} ingredients={testFood.ingredients} minPrice={minPrice}
                            maxPrice={maxPrice} addIngredients={addIngredients} removeIngredients={removeIngredients}/>
                    <Menu foodGroups={testMenu}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>
}

export default App