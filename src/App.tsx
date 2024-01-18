import {useState, Suspense, lazy} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
const Login = lazy(() => import('./Login'))
const Home = lazy(() => import('./Home'))
function App() {
  const [loggedIn, loggedInSet] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
        </Route>
        <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login loggedInSet={loggedInSet} /></Suspense>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
