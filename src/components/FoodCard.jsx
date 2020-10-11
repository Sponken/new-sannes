import React from 'react'
import {DigitDesign, DigitLayout, DigitText, DigitMarkdown} from "@cthit/react-digit-components";

const FoodCard = ({
                      title,
                      price,
                      ingredients
                  }) => {
    return <DigitDesign.Card size={{width: "300px", height: "240px"}}>
        <DigitDesign.CardBody>
            <DigitLayout.Row bottomPadding='20px' justifyContent="space-between">
                <DigitText.Heading5 text={title} bold/>
                <DigitText.Heading5 text={price + "kr"} bold/>
            </DigitLayout.Row>
            <DigitMarkdown markdownSource={ingredients === undefined ? "" : ingredients.join(", ")}/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>

}

export default FoodCard;