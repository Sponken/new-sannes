import React from 'react'
import {DigitDesign, DigitButton, DigitText, DigitAutocompleteSelectMultiple, DigitLayout, DigitTextField} from "@cthit/react-digit-components";


const Filter = ({groupNames, prefNames, ingredients}) => {
    return <DigitDesign.Card>
        <DigitText.Heading5 text="Matgrupp"/>
        <FoodGroupFilter groupNames={groupNames}/>
        <DigitText.Heading5 text="Pref"/>
        <FoodPrefFilter prefNames={prefNames}/>
        <DigitText.Heading5 text="Ingredienser"/>
        <DigitLayout.Row>
        <AddIngredientList ingredients={ingredients}/>
        <AddIngredientList ingredients={ingredients}/>
        </DigitLayout.Row>
        <DigitText.Heading5 text="Pris Interval"/>
        <PriceRange/>
    </DigitDesign.Card>

}

const FoodGroupFilter = ({groupNames}) => {
    const groupButtons = groupNames.map(n => <DigitButton outlined primary text={n}/>)
    return <div>
        {groupButtons}
    </div>
}

const FoodPrefFilter = ({prefNames}) => {
    const groupButtons = prefNames.map(n => <DigitButton outlined primary text={n}/>)
    return <div>
        {groupButtons}
    </div>
}

const AddIngredientList = ({ingredients}) => {
    return <DigitAutocompleteSelectMultiple options={ingredients}/>
}

const PriceRange = ({min, max}) => {
    return <DigitLayout.Row>
        Pris:
        <DigitTextField numbersOnly value={min} upperLabel="Min" lowerLabel=""/>
        -
        <DigitTextField numbersOnly value={max} upperLabel="Max" lowerLabel=""/>
    </DigitLayout.Row>
}

export default Filter