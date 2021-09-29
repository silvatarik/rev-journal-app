import React from 'react'
import {
    Redirect,
    Switch,
    Route
} from "react-router-dom";
import { LoginView } from '../components/auth/LoginView';
import { RegisterView } from '../components/auth/RegisterView';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login">
                    <LoginView />
                </Route>

                <Route path="/auth/register">
                    <RegisterView />
                </Route>

                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
