// Importing the dependencies
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../Redux/authReducer";
import { useNavigate } from "react-router-dom";
// Importing the Styles
import Style from '../SingUp/SingUp.module.css';


// Implementing the Sing In function
function SingIn(){
    // Using it for ref, in place of email and passoword to get the data, while submiting
    const emailRef = useRef();
    const passwordRef = useRef();

    // Importing few dependencies from the state-management 
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // for clearing the values of the refs
    function handleClear(){
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }

    // For handling the function which will be performed when the LogIn is clicked
    async function handleSubmit(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await dispatch(signIn(email, password));
        if(!error){
            navigate('/');
        }
        handleClear();
        
    }

    // Returing thr UI
    return (
        <>
            <div className={Style.form}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" ref={emailRef} /> <br />
                <input type="password" placeholder="Password" ref={passwordRef} /> <br />
                <button  type="submit">{loading ? 'Loading...' : 'Sign In'}</button>
                {error ? <p>{error.message}</p> : null}
                </form>
            </div>
        </>
    )
}

export default SingIn;