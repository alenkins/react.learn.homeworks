import {Fragment} from "react";
import {TabsHeaders} from "./tabs-headers.jsx";
import {TabsContent} from "./tabs-content.jsx";

export const Tabs = ({restaurants, tabClickHandler, activeTab}) => {
    return(
        <Fragment>
            <TabsHeaders restaurants = {restaurants} tabClickHandler={tabClickHandler} activeTab={activeTab} />
            <TabsContent restaurants = {restaurants} activeTab={activeTab} />
        </Fragment>
    );
}