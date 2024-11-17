export const Layout = ({children}) => {
    return(
        <div className="grid-container">
            <div className="grid-x grid-margin-x grid-margin-y">
                <div className="cell">
                    <header>
                        <h1>Рестораны вашего города</h1>
                    </header>
                </div>
                {children}
                <div className="cell">
                    <footer>Контактная информация</footer>
                </div>
            </div>
        </div>
    );
}