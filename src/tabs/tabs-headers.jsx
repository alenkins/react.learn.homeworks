export const TabsHeaders = ({restaurants, tabClickHandler, activeRestaurant}) => {
    return(
        <ul className="tabs">
            {
                restaurants.map((restaurant) => {
                    const className = activeRestaurant.id === restaurant.id ? ' is-active' : '';
                    return(
                        <li key = {restaurant.id} className = {'tabs-title' + className}>
                            <a href = {'#' + restaurant.id} onClick = {() => tabClickHandler(restaurant)}>
                                {restaurant.name}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}