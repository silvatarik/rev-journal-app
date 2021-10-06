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
    const [checking, setChecking] = useState(true);
    /*  const MySwal = withReactContent(Swal); */
    const [isAunthenthicate, setisAunthenthicate] = useState(false);

    /* Mantener los datos incluso si se recarga la pagina */
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            /*  console.log(user); */
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisAunthenthicate(true);

                dispatch(startLoadingNotes(user.uid));
            } else {
                setisAunthenthicate(false);
            }

            setChecking(false);
        })

    }, [auth, dispatch, setisAunthenthicate]);
/* 
    if (checking) {
        return 'Espere...';

    } */

    return (
        <Router>
            <div>
                <Switch>
                    {/* Esta ruta y sub son para la auth */}
                    {/* <Route path="/auth" component={AuthRouter} /> */}
                    <PublicRouter path="/auth" component={AuthRouter} isAunthenthicate={isAunthenthicate} />


                    {/* Esta ruta redirige a journalView */}
                    {/* <Route exact path="/" component={JournalView} /> */}
                    <PrivateRoute exact path="/" component={JournalView} isAunthenthicate={isAunthenthicate} />


                </Switch>
            </div>
        </Router>
    )
}
