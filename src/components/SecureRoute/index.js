import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux'

const SecureRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector(state => state.auth)

	console.log(auth)

	return (
		 <Route 
            {...rest}
            render={props => (
                auth?.isAuthenticated ? (
                    <Component {...props} />
                ) : <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
            )}/>
	)
}

export default SecureRoute