import React from 'react'
import ReactDOM from 'react-dom'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, options, pref, testMenu} from "./data";

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <div>
                    <Filter groupNames={groupTitles()} prefNames={pref} ingredients={options}/>
                    <Menu foodGroups={testMenu}/>
                </div>
            )}
        />
    </DigitProviders>,
    document.getElementById("root")
);