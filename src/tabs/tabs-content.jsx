import {Menu} from "../menu/menu.jsx";
import {Reviews} from "../reviews/reviews.jsx";
export const TabsContent = ({restaurants, activeTab}) => {
    return(
        <div className="tabs-content">
            {
                restaurants.map((restaurant, restaurantIndex) => {
                    const className = activeTab !== restaurantIndex ? "tabs-panel" : "tabs-panel is-active";
                    return(
                        <div key = {'tab-' + restaurantIndex} className = {className}>
                            <Menu dishes = {restaurant.menu} />
                            <Reviews reviews = {restaurant.reviews} />
                        </div>
                    );
                })
            }
        </div>
    );
}