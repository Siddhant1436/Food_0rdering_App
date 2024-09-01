import React from "react";
import ReactDOM from "react-dom/client";

const SubComponent = () => {
    return <h2 id="subcomponent">I successfuly ignited the app from scratch for food ordering app</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SubComponent/>);