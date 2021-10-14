import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { JournalView } from '../components/journal/JournalView';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRouter } from './PublicRouter';

import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const auth = getAuth();
    const [isAunthenthicate, setisAunthenthicate] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisAunthenthicate(true);

                dispatch(startLoadingNotes(user.uid));
            } else {
                setisAunthenthicate(false);
            }
        })

    }, [auth, dispatch, setisAunthenthicate]);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter path="/auth" component={AuthRouter} isAunthenthicate={isAunthenthicate} />
                    <PrivateRoute exact path="/" component={JournalView} isAunthenthicate={isAunthenthicate} />
                </Switch>
            </div>
        </Router>
    )
}
