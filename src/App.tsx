import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Main from './Main'
import PrivateRoute from './PrivateRoute'
function App() {

  const [loggedIn, loggedInSet] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PrivateRoute loggedIn={loggedIn} />}>
          <Route path='/' element={<Main />} />
        </Route>
        <Route path='/login' element={<Login loggedInSet={loggedInSet} />} />
      </Routes>
    </Router>
  );
}

export default App;
