// Importing the dependencies 
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser, toogleForm } from '../../Redux/authReducer';
// Importing Style from the style module.
import Style from './NavBar.module.css';


// Implementing the function
function NavBar() {
    // importing from redux-reducer
    const toogleSingIn = useSelector((state) => state.auth.toogleSingIn);
    const currentUser = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch();

    // Handling the toogleForm
    function toogleFormClick(){
        dispatch(toogleForm());
    }

    // For log-out 
    function exitSession(){
        dispatch(signOutUser());
    }

    // Return the man functon
    return (
      <>
        {/* the Ui of this is in the same row, with space between */}
        <nav className={Style.nav}>
            <div className={Style.logo}>
                <Link to='/'>Crypto-Monkey</Link>
            </div>
            {/* If currenct user is there then Logout is displyed else sing In or singUp will disply */}
            {currentUser ? 
                <div onClick={exitSession}>
                    <h3>LogOut</h3>
                </div> : 
                <div onClick={toogleFormClick} className={Style.signin}>
                    <NavLink to= {toogleSingIn ? '/singIn' : '/singUp'}>
                        {toogleSingIn ? 'SingIn' : 'Sing-Up'}
                    </NavLink>
                </div>
            }
            
        </nav>
        <Outlet />
      </>
    );
}

export default NavBar;
  