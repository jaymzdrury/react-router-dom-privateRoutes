import {useNavigate} from 'react-router-dom'

function Login({loggedInSet}:{loggedInSet: (loggedInSet: boolean) => void}) {
  const naviagte = useNavigate()
  const onClick = () => {
    loggedInSet(true)
    naviagte('/')
  }
  return <button role='button' onClick={onClick}>LOG IN</button>
}

export default Login