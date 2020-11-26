import React from 'react'
import {DigitLayout, DigitText} from "@cthit/react-digit-components";
import FoodCard from "./FoodCard";

const FoodGroup = ({
                       foods,
                       groupTitle,
                   }) => {
    const foodCards = foods.map(f => <FoodCard key={f.title} food={f}/>)

    return foods.length === 0 ? null : <div id="foodGroup">
        <DigitText.Heading4 text={groupTitle} />
        <DigitLayout.Grid id="foodGrid" columns={`repeat(auto-fill, 350px)`} >
            {foodCards}
        </DigitLayout.Grid>
    </div>
}

export default FoodGroup