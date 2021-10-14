import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({
    isAunthenthicate,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                
                (isAunthenthicate)
                    ? (<Component {...props} />)
                    : (<Redirect to="/auth/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAunthenthicate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
