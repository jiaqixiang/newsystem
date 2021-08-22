import React from 'react'
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom'
import Login from '../views/login/index'
import NewsSandBox from '../views/sandBox/newsSandBox'

export default function router() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" render={()=>
                    localStorage.getItem('token')?
                    <NewsSandBox></NewsSandBox>:
                    <Redirect to="/login" />
                } />
            </Switch>
        </HashRouter>
    )
}
