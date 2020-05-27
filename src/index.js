import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

ReactDOM.render(<App/>, document.getElementById('container'))

// import { LikeButton } from "./components/LikeButton.js";

// es modules

// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById("container");
//     ReactDOM.render(React.createElement(LikeButton), container);
// });


/*
1. React.Component (basics)
2. JSX....... Webpack + JSX
3. (PReact, alternate syntax)
    export const LikeButton = () => {
        return (
            <div class=""></div>
        )
    }
*/