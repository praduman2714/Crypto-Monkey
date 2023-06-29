// Importing dependies form the react
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// Importing redux-store
import store from './store';
// Imporint some of the componets
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import FallbackComponent from './Components/FallBack/FallBack';
import SingIn from './Components/SingIn/SingIn';
import SingUp from './Components/SingUp/SingUp';

// Improting Styles
import './App.css';

// Implemeneting the App Componets
function App() {
  // Making the routere
  const router = createBrowserRouter([
    {path : '/', element : <NavBar /> , children: [
      {path : '/' , element : <Home />},
      {path : '/singUp' , element : <SingUp />},
      {path : '/singIn' , element : <SingIn />},
      {path : '/fallback' , element : <FallbackComponent />}
    ]}
    
  ])
  return (
    <Provider store={store}>
        <div className="App">
          <RouterProvider router={router} />
        </div>
    </Provider>
  );
}

export default App;
