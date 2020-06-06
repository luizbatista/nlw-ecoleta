import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import UserDashboard from './pages/UserDashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            {/* <Route path="/user/:id" component={UserProfile} exact /> */}
            <Route path="/user/:id/dashboard" component={UserDashboard} exact />
        </BrowserRouter>
    )
}

export default Routes