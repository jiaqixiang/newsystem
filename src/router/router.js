import React from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Login from '../views/login/index'

export default function router() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route to="/login" component={Login}></Route>
                    <Redirect from="/" to="/login"></Redirect>
                </Switch>
            </HashRouter>
        </div>
    )
}
