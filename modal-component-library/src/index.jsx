import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "./lib/Modal";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Modal openModal={true}>Hello</Modal>
)
