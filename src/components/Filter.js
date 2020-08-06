import React from 'react'
import {
    DigitDesign,
    DigitButton,
    DigitText,
    DigitAutocompleteSelectMultiple,
    DigitLayout,
    DigitTextField
} from "@cthit/react-digit-components";


const Filter = ({groupNames, prefNames, ingredients}) =>
    <DigitDesign.Card size={{width: '600px'}}>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Matgrupp"/>
            <FoodGroupFilter groupNames={groupNames}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Pref"/>
            <FoodPrefFilter prefNames={prefNames}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Ingredienser"/>
            <DigitLayout.Row>
                <AddIngredientList ingredients={ingredients}/>
                <AddIngredientList ingredients={ingredients}/>
            </DigitLayout.Row>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Pris Interval"/>
            <PriceRange/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>


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
    return <DigitLayout.Row alignItems='center'>
        <DigitTextField numbersOnly value={min} upperLabel="Min"/>
        <DigitText.Heading5 text='-'/>
        <DigitTextField numbersOnly value={max} upperLabel="Max"/>
    </DigitLayout.Row>
}

export default Filter