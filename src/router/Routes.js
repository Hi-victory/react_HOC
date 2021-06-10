import React from "react"
import {HashRouter,Route,Redirect} from 'react-router-dom'
import Home from "../component/Home/Home"
import Login from "../component/Login/Login"
function Routes() {
        return (
                <HashRouter>
                    <Route path="/" exact component={() => <Redirect to="/home"/>} />
                    <Route path="/" exact component={ Home } />
                    <Route path="/home" exact component={ Home } />
                    <Route path="/login" exact component={ Login } />
                </HashRouter>
        )
}

export default Routes