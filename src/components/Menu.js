import React from 'react'
import FoodGroup from "./FoodGroup";
import {DigitLayout} from "@cthit/react-digit-components";


const Menu = ({foodGroups}) => {
    const menu = foodGroups.map(g => <FoodGroup key={g.groupTitle} groupTitle={g.groupTitle} foods={g.foods}/>)
    return <DigitLayout.Column id="menu">
            {menu}
        </DigitLayout.Column>
 
}

export default Menu