import React from 'react'
import {DigitDesign, DigitLayout, DigitText} from "@cthit/react-digit-components";

const FoodCard = ({
                      title,
                      price,
                      ingredients
                  }) => {
    return <DigitDesign.Card size={{width:"300px", height:"190px"}}>
            <DigitLayout.Row justifyContent = "space-between">
                <DigitText.Heading5 text={title} bold/>
                <DigitText.Heading5 text={price+"kr"} bold/>
            </DigitLayout.Row>
        {ingredients.join(", ")}
        </DigitDesign.Card>

}

export default FoodCard;