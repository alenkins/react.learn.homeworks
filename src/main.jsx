import { createRoot } from 'react-dom/client'
import { restaurants } from "../mockups/mock.js";

createRoot(document.getElementById('root')).render(
    <div className="grid-x grid-margin-x grid-margin-y">
        <div className="cell">
            <h1 style={{color: "#3E6E93"}}>Рестораны вашего города</h1>
        </div>
        {
            restaurants.map(item => {
                return(
                    <div className="cell">
                        <div className="card">
                            <div className="card-divider">
                                <h2>{item.name}</h2>
                            </div>
                            <div className="card-section">
                                <h3>Меню</h3>
                                <ul>
                                    {
                                        item.menu.map(dish => <li>{dish.name}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="card-section">
                                <h3 className="subheader">Отзывы</h3>
                                <ul className="no-bullet">
                                    {
                                        item.reviews.map(review => <li><blockquote>{review.text} <cite>{review.user}</cite></blockquote></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>
)