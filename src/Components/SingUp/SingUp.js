// Importing dependencies form the react
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../Redux/authReducer";
import { useNavigate } from "react-router-dom";

// Importing style 
import Style from './SingUp.module.css';


// Implementing the sing-up funciton 
function SingUp(){
    // using this ref to tke the values of the form while submintting
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    // Importing from state managemetn libraries
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const dispatch = useDispatch();
    // Implementing when submit is clieck
    async function handleSubmit(e) {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await dispatch(signUp(email, password));
        if(!error){
            navigate('/singIn');
        }
           
        handleRemove();
    }
    // When submit is clied it will remove all the value of current.ref
    function handleRemove(){
        nameRef.current.value = "";
        emailRef.current.value = "";
        passwordRef.current.value = "";
    }
    // Implementing the UI
    return (
        <>
            <div className={Style.form}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" ref={nameRef} /> <br />
                <input type="email" placeholder="Email" ref={emailRef} /> <br />
                <input type="password" placeholder="Password" ref={passwordRef} /> <br />
                <button  type="submit">{loading ? '>> Loading' : 'Sign Up'}</button>
                {error ? <p>{error.message}</p> : null}
                </form>
            </div>
        </>
    )
}

export default SingUp;