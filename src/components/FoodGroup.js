import React from 'react'
import {DigitLayout, DigitText} from "@cthit/react-digit-components";
import FoodCard from "./FoodCard";

const FoodGroup = ({
                       foods,
                       groupTitle,
                   }) => {
    const foodCards = foods.map(f => <FoodCard key={f.title} title={f.title} price={f.price}
                                               ingredients={f.ingredients}/>)
    return <div style={{
        marginLeft: "2vw",
        marginRight: "2vw",
        marginTop: "20px",
        width: "95vw",
    }}>
        <DigitText.Heading4 text={groupTitle}/>
        <DigitLayout.UniformGrid margin="20px" minItemWidth="300px" justifyItems="center">
            {foodCards}
        </DigitLayout.UniformGrid>
    </div>
}

export default FoodGroup