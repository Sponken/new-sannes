import React from 'react'
import {DigitDesign, DigitLayout, DigitText, DigitMarkdown} from "@cthit/react-digit-components";
import {ImFire as hotIcon, ImGift} from 'react-icons/im'
import calzone from '../../public/calzone.png'
import hot from '../../public/hot.png'
import veg from '../../public/carrot.png'

const FoodCard = ({
                      food
                  }) => {

    let id = ""

    let symbol

    if (food.veg) {
        id = "veg"
        symbol = veg
    } else if (food.spicy) {
        id = "spicy"
        symbol = hot
    } else if (food.type === "baked") {
        id = "baked"
        symbol = calzone
    }


    return <DigitDesign.Card className="foodCard">
        <DigitDesign.CardBody  className={"foodCard " + id}>
            <DigitLayout.Row bottomPadding='10px' justifyContent="space-between">
                <DigitText.Heading5 text={capitalizeFirstLetter(food.title)} bold/>
                <DigitText.Heading5 text={food.price + "kr"} bold/>
            </DigitLayout.Row>
            <DigitText.Text className="ingredientText" text={food.ingredients === undefined ? " " : capitalizeFirstLetter(food.ingredients.join(", "))}/>
            <img src={symbol} className="symbol"/>
        </DigitDesign.CardBody>
    </DigitDesign.Card>

}

const capitalizeFirstLetter = text => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default FoodCard;