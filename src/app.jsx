import {Layout} from "./layout/layout.jsx";
import {restaurants} from "../mockups/mock.js";
import {Tabs} from "./tabs/tabs.jsx";
export const App = () => {
    return (
        <Layout>
            <div className="cell">
                <Tabs restaurants = {restaurants} />
            </div>
        </Layout>
    );
}