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
                    maxPrice,
                    ingredients,
                    wantedIngredients,
                    unwantedIngredients,
                    searchTerm
                }) => {

    return <DigitDesign.Card size={{width: '600px'}}>
        <DigitDesign.CardBody>
            <DigitTextField value ={searchTerm.value} onChange= {e => searchTerm.setter(e.target.value)} upperLabel="Sök på artikel"/>
        </DigitDesign.CardBody>
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
                <IngredientList ingredients={ingredients} chosenIngredients={wantedIngredients} text="Vill ha"/>
                <IngredientList ingredients={ingredients} chosenIngredients={unwantedIngredients} text="Vill inte ha"/>
            </DigitLayout.Row>
        </DigitDesign.CardBody>
        <DigitDesign.CardBody>
            <DigitText.Heading5 text="Max"/>
            <DigitTextField numbersOnly value={maxPrice.value} upperLabel="Max"
                            onChange={e => maxPrice.setter(e.target.value)}/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>
}

const ToggleFilterButtons = ({options, chosen}) => {
    const groupButtons = options.map(n => <DigitButton outlined={!chosen.value.includes(n)}
                                                       raised={chosen.value.includes(n)} primary text={n}
                                                       onClick={() => {
                                                           chosen.value.includes(n) ? chosen.setter(chosen.value.filter(item => item !== n)) : chosen.setter([...chosen.value, n])
                                                       }}/>)
    return <div>
        {groupButtons}
    </div>
}

const IngredientList = ({ingredients, chosenIngredients, text}) => {
    const ingredientOptions = ingredients.map(g => {
        const t = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
        const v = g.toLowerCase()

        return {
            text: t, value: v
        }
    })

    const ingredientValues = chosenIngredients.value.map(g => g.toLowerCase())

    return <DigitAutocompleteSelectMultiple options={ingredientOptions} value={ingredientValues}
                                            onChange={e => chosenIngredients.setter(e.target.value)}
                                            upperLabel={text}/>
}

export default Filter