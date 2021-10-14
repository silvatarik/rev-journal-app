import { getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { cleanNotes } from './notes';
import { finishLoading, startLoading } from './ui';

const auth = getAuth();

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setTimeout(() => {
                    dispatch(finishLoading());
                    dispatch(login(user.uid, user.displayName))
                }, 3000);
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(finishLoading());
                Swal.fire(
                    'Error',
                    errorMessage,
                    'error'
                )
            });

    }
}

export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                console.log(user);
                dispatch(login(user.uid, user.displayName))
            }).catch(e => {
                console.log(e);
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            });
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogout = () => {
    return (dispatch) => {
        signOut(auth).then(() => {
            console.log('Signed Out');
            dispatch(cleanNotes());
            dispatch(logout());
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }
}

export const logout = () => ({
    type: types.logout
})

