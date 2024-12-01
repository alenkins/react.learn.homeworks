import {ThemeContextProvider} from "./components/theme-context/theme-context.jsx";
import {AuthContextProvider} from "./components/auth-context/auth-context.jsx";
import {Layout} from "./components/layout/layout.jsx";
import {restaurants} from "../mockups/mock.js";
import {Tabs} from "./components/tabs/tabs.jsx";
import "./styles/normalize.css";
import "./styles/fonts.css";
import "./styles/app.css";
export const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <Layout>
                    <Tabs restaurants = {restaurants} />
                </Layout>
            </AuthContextProvider>
        </ThemeContextProvider>
    );
}