import React from 'react'
import ReactDOM from 'react-dom'
import Filter from "./components/Filter";
import {DigitHeader, DigitProviders, DigitLayout} from "@cthit/react-digit-components";
import Menu from "./components/Menu";
import {groupTitles, options, pref, testMenu} from "./data";

ReactDOM.render(
    <DigitProviders>
        <DigitHeader
            title="Sannes"
            renderMain={() => (
                <DigitLayout.Column alignItems='center'>
                    <Filter groupNames={groupTitles} prefNames={pref} ingredients={options}/>
                    <Menu foodGroups={testMenu}/>
                </DigitLayout.Column>
            )}
        />
    </DigitProviders>,
    document.getElementById("root")
);