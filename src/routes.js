import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { NewArticle } from "./components/Article/NewArticle"
import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";
import { Header } from "./components/Header/Header";

const Routes = () => {
    return (
        <Router>
            <StoreProvider>
                <RoutesPrivate component = { Home } path="/" exact />
                <Route component = { NewArticle } path="/new_article" />
                <Route component = { Login } path="/login" />
                <Route component = { Register } path="/register" />
            </StoreProvider>
        </Router>
    )
}

export default Routes;