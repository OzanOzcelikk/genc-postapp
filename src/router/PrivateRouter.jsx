import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider';

const PrivateRouter = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Link to="/login"/>;
      } else {
        return <Outlet />;
      }
 
}

export default PrivateRouter