import {useState} from "react";
import {Layout} from "./layout/layout.jsx";
import {restaurants} from "../mockups/mock.js";
import {Tabs} from "./tabs/tabs.jsx";
export const App = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabClickHandler = num => setActiveTab(num);
    return (
        <Layout>
            <div className="cell">
                <Tabs
                    restaurants = {restaurants}
                    activeTab = {activeTab}
                    tabClickHandler = {tabClickHandler}
                />
            </div>
        </Layout>
    );
}