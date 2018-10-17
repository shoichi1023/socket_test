import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Store from "./Store";

//router
import App from "./App";

class Root extends React.Component {
    render() {
        return (
            <Store.Container>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Store.Container>
        );
    }
}

ReactDom.render(<Root />, document.getElementById("root"));