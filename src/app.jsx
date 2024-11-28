import {Layout} from "./components/layout/layout.jsx";
import {restaurants} from "../mockups/mock.js";
import {Tabs} from "./components/tabs/tabs.jsx";
import "./styles/normalize.css";
import "./styles/fonts.css";
import "./styles/app.css";
export const App = () => {
    return (
        <Layout>
            <Tabs restaurants = {restaurants} />
        </Layout>
    );
}