import React from 'react'
import {DigitDesign, DigitLayout, DigitText, DigitMarkdown} from "@cthit/react-digit-components";

const FoodCard = ({
                      food
                  }) => {

    let id = ""

    if (food.veg) {
        id = "veg"
    } else if (food.spicy) {
        id = "spicy"
    } else if (food.type === "baked") {
        id = "baked"
    }

    return <DigitDesign.Card size={{width: "350px", height: "240px"}} id={id}>
        <DigitDesign.CardBody>
            <DigitLayout.Row bottomPadding='20px' justifyContent="space-between">
                <DigitText.Heading5 text={food.title} bold/>
                <DigitText.Heading5 text={food.price + "kr"} bold/>
            </DigitLayout.Row>
            <DigitMarkdown markdownSource={food.ingredients === undefined ? "" : food.ingredients.join(", ")}/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>

}

export default FoodCard;