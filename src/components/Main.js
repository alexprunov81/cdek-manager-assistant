import React from 'react';
import Filter from "./Filter";

const Main = props => {
    return (

        <div id="index-banner" className="container">
            <div className="section no-pad-bot">
                <Filter
                    insertItem={props.insertItem}
                    setInsertItem={props.setInsertItem}
                />
            </div>
        </div>
    )
}

export default Main;