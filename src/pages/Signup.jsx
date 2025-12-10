import { Link } from "react-router-dom"
import { LoginForm } from "../components"
import { SignupForm } from "../components"

const SignupPage = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="">
          <h1>Signup Page</h1>
          <SignupForm />
          Already have an account? <Link to={"/"}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage