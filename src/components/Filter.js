import React from 'react'
import {
    DigitDesign,
    DigitButton,
    DigitText,
    DigitAutocompleteSelectMultiple,
    DigitLayout,
    DigitTextField
} from "@cthit/react-digit-components";
import {testFood} from "../data";


const Filter = ({
                    groupNames,
                    chosenFoodGroups,
                    prefNames,
                    chosenFoodPref,
                    minPrice,
                    maxPrice,
                    ingredients,
                    addIngredients,
                    removeIngredients
                }) => {

    return <DigitDesign.Card size={{width: '600px'}}>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Matgrupp"/>
            <FoodGroupFilter groupNames={groupNames} chosenFoodGroups={chosenFoodGroups}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Pref"/>
            <FoodPrefFilter prefNames={prefNames} chosenFoodPref={chosenFoodPref}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Ingredienser"/>
            <DigitLayout.Row>
                <IngredientList ingredients={ingredients} chosenIngredients={addIngredients}/>
                <IngredientList ingredients={ingredients} chosenIngredients={removeIngredients}/>
            </DigitLayout.Row>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Pris Interval"/>
            <PriceRange min={minPrice} max={maxPrice}/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>
}


const FoodGroupFilter = ({groupNames, chosenFoodGroups}) => {
    const groupButtons = groupNames.map(n => <DigitButton outlined={!chosenFoodGroups.includes(n)}
                                                          raised={chosenFoodGroups.includes(n)} primary text={n}/>)
    return <div>
        {groupButtons}
    </div>
}

const FoodPrefFilter = ({prefNames, chosenFoodPref}) => {
    const groupButtons = prefNames.map(n => <DigitButton outlined={!chosenFoodPref.includes(n)}
                                                         raised={chosenFoodPref.includes(n)} primary text={n}/>)
    return <div>
        {groupButtons}
    </div>
}

const IngredientList = ({ingredients, chosenIngredients}) => {
    const ingredientOptions = ingredients.map(g => {
        const t = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
        const v = g.toLowerCase()

        return {
            text: t, value: v
        }
    })

    const ingredientValues = chosenIngredients.map(g => g.toLowerCase())

    return <DigitAutocompleteSelectMultiple options={ingredientOptions} value={ingredientValues}/>
}

const PriceRange = ({min, max}) => {
    return <DigitLayout.Row alignItems='center'>
        <DigitTextField numbersOnly value={min} upperLabel="Min"/>
        <DigitText.Heading5 text='-'/>
        <DigitTextField numbersOnly value={max} upperLabel="Max"/>
    </DigitLayout.Row>
}

export default Filter