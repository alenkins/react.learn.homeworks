export const TabsHeaders = ({restaurants, tabClickHandler, activeTab}) => {
    return(
        <ul className="tabs">
            {
                restaurants.map((restaurant, restaurantIndex) => {
                    const className = activeTab === restaurantIndex ? ' is-active' : '';
                    return(
                        <li key = {restaurant.id} className = {'tabs-title' + className}>
                            <a href = {'#' + restaurant.id} onClick = {() => tabClickHandler(restaurantIndex)}>
                                {restaurant.name}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}