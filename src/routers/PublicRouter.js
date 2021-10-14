import React from 'react'
import PropTypes from 'prop-types'
import {Redirect,Route} from 'react-router-dom'

export const PublicRouter = ({
    isAunthenthicate,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (

                (isAunthenthicate)
                    ? (<Redirect to="/" />)
                    : (<Component {...props} />)
            )}
        />
    )
}

PublicRouter.propTypes = {
    isAunthenthicate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}