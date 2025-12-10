import { Link } from "react-router-dom"
import { LoginForm } from "../components"
import { SignupForm } from "../components"
import {
  auth,
  createUserWithEmailAndPassword
} from "../config/firebase.js";
const SignupPage = () => {

  const registerUser = ({email, password}) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
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
          <h1>Signup Page</h1>
          <SignupForm registerUser={registerUser} />
          Already have an account? <Link to={"/"}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignupPage