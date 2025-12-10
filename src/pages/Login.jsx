import { Link } from 'react-router-dom'
import { LoginForm } from '../components'

const Login = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="">
          <h1>Login Page</h1>
          <LoginForm />
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login