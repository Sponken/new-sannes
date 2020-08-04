import React from 'react'
import {DigitDesign, DigitButton} from "@cthit/react-digit-components";


const Filter = ({groupNames}) => {
    return <DigitDesign.Card>
        <FoodGroupFilter groupNames={groupNames}/>
    </DigitDesign.Card>
}

const FoodGroupFilter = ({groupNames}) => {
    const groupButtons = groupNames.map(n => <DigitButton outlined primary text={n}/>)
    return <div>
        {groupButtons}
    </div>
}


export default Filter