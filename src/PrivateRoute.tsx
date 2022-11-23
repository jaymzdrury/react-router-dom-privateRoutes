import {Navigate, Outlet} from 'react-router-dom'
function PrivateRoute({loggedIn}:{loggedIn: boolean}) {
  return loggedIn ? <Outlet /> : <Navigate to='/login' />
}
export default PrivateRoute