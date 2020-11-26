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

    return <DigitDesign.Card className="foodCard"  >
        <DigitDesign.CardBody className={"foodCard " + id}>
            <DigitLayout.Row bottomPadding='20px' justifyContent="space-between">
                <DigitText.Heading5 text={capitalizeFirstLetter(food.title)} bold/>
                <DigitText.Heading5 text={food.price + "kr"} bold/>
            </DigitLayout.Row>
            <DigitMarkdown markdownSource={food.ingredients === undefined ? "" : capitalizeFirstLetter(food.ingredients.join(", "))}/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>

}

const capitalizeFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default FoodCard;