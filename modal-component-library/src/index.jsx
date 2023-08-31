import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "./lib/Modal";
import styled from "styled-components"
import TestModal from "./TestModal";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <TestModal openModal={true}>
        <div>
            <h1>Hello</h1>
        </div>
    </TestModal>
)
