import React from "react";
import { Route } from "react-router-dom";
//component
import Entry from "./pages/Entry";
import Chat from "./pages/Chat";

const app = () => (
    <div>
        <Route exact path="/" component={Entry} />
        <Route path="/chat" component={Chat} />
    </div>
);

export default app;