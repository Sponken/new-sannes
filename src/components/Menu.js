import React from 'react'
import FoodGroup from "./FoodGroup";
import {DigitLayout} from "@cthit/react-digit-components";


const Menu = ({foodGroups}) => {
    const menu = foodGroups.map(g => <FoodGroup key={g.groupTitle} groupTitle={g.groupTitle} foods={g.foods}/>)
    return <div>
        <DigitLayout.Column>
            {menu}
        </DigitLayout.Column>
    </div>
}

export default Menu