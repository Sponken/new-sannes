import React from 'react'
import {DigitLayout} from "@cthit/react-digit-components";
import FoodCard from "./FoodCard";

const FoodGrid = ({
                      foods
                  }) => {
    const foodCards = foods.map(f => <FoodCard key={f.title} title={f.title} price={f.price}
                                               ingredients={f.ingredients}/>)
    return <div style={{
        marginLeft: "2vw",
        marginRight: "2vw",
        marginTop: "20px",
        width: "95vw",
    }}>
        <DigitLayout.UniformGrid margin="20px" minItemWidth="300px" justifyItems="center">
            {foodCards}
        </DigitLayout.UniformGrid>
    </div>
}

export default FoodGrid