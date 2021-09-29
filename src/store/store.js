import {
    createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';


/* Con esta sentencia podemos aplicar varios middleware */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/* Solo recibe un reducer el createStore de Redux.Sin embargo existe un metodo para poder combinarlos */
const reducers = combineReducers({
    auth: authReducer,
    ui:uiReducer
});


/* Todo esto con la finalidad de manejar acciones asincronas en la aplicacion */
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);