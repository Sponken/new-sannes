import React from 'react'
import {
    DigitDesign,
    DigitButton,
    DigitText,
    DigitAutocompleteSelectMultiple,
    DigitLayout,
    DigitTextField
} from "@cthit/react-digit-components";

const Filter = ({
                    groupNames,
                    chosenFoodGroups,
                    prefNames,
                    chosenFoodPref,
                    minPrice,
                    maxPrice,
                    ingredients,
                    wantedIngredients,
                    unwantedIngredients
                }) => {

    return <DigitDesign.Card size={{width: '600px'}}>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Matgrupp"/>
            <ToggleFilterButtons options={groupNames} chosen={chosenFoodGroups}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Pref"/>
            <ToggleFilterButtons options={prefNames} chosen={chosenFoodPref}/>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Ingredienser"/>
            <DigitLayout.Row>
                <IngredientList ingredients={ingredients} chosenIngredients={wantedIngredients}/>
                <IngredientList ingredients={ingredients} chosenIngredients={unwantedIngredients}/>
            </DigitLayout.Row>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Pris Interval"/>
            <PriceRange min={minPrice} max={maxPrice}/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>
}

const ToggleFilterButtons = ({options, chosen}) => {
    console.log(chosen.value)
    const groupButtons = options.map(n => <DigitButton outlined={!chosen.value.includes(n)}
                                                       raised={chosen.value.includes(n)} primary text={n}
                                                       onClick={() => {
                                                            chosen.setter([...chosen.value, n])
                                                         }}/>)
    console.log(chosen.value)
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

    const ingredientValues = chosenIngredients.value.map(g => g.toLowerCase())

    return <DigitAutocompleteSelectMultiple options={ingredientOptions} value={ingredientValues}
                                            onChange={e => chosenIngredients.setter(e.target.value)}/>
}

const PriceRange = ({min, max}) => {
    return <DigitLayout.Row alignItems='center'>
        <DigitTextField numbersOnly value={min.value} upperLabel="Min" onChange={e => min.setter(e.target.value)}/>
        <DigitText.Heading5 text='-'/>
        <DigitTextField numbersOnly value={max.value} upperLabel="Max" onChange={e => max.setter(e.target.value)}/>
    </DigitLayout.Row>
}


export default Filter