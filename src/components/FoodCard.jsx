import React from 'react'
import {DigitDesign, DigitLayout, DigitText} from "@cthit/react-digit-components";

const FoodCard = ({
                      title,
                      price,
                      ingredients
                  }) => {
    // TODO: fixa spacing mellan namn och pris.
    return <DigitDesign.Card size={{width:"320px", height:"190px"}}>
            <DigitLayout.Row>
                <DigitText.Heading5 text={title} bold/>
                <DigitText.Heading5 text={price} bold/>
            </DigitLayout.Row>
        </DigitDesign.Card>

}

export default FoodCard;