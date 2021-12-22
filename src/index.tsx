import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

// Libs
import { BrowserRouter } from "react-router-dom";

// Components
import { App } from "./App";

// Styles
import "./styles/index.scss";
import "antd/dist/antd.css";

ReactDOM.render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
