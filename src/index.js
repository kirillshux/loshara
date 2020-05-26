import React from "react";
import ReactDOM from "react-dom";

import { LikeButton } from "./components/LikeButton.js";

// es modules

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("container");
    ReactDOM.render(React.createElement(LikeButton), container);
});