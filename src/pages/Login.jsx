import { Link } from 'react-router-dom'
import { LoginForm } from '../components'
import {
  auth,
  signInWithEmailAndPassword
} from "../config/firebase.js";

const LoginPage = () => {
  const loginUser = ({email, password}) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="">
          <h1 className='mb-5'>Login Page</h1>
          <LoginForm loginUser={loginUser} />
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage