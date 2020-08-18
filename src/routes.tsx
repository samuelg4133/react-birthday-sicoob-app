import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Birthdays from "./pages/Birthdays";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/aniversariantes/:mes">
                <Birthdays/>
            </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
