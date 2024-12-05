import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {ThemeContextProvider} from "./components/theme-context/theme-context.jsx";
import {AuthContextProvider} from "./components/auth-context/auth-context.jsx";
import {Layout} from "./components/layout/layout.jsx";
import {TabsContainer} from "./components/tabs/tabs-container.jsx";
import "./styles/normalize.css";
import "./styles/fonts.css";
import "./styles/app.css";
export const App = () => {
    return (
        <Provider store = {store}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Layout>
                        <TabsContainer />
                    </Layout>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}