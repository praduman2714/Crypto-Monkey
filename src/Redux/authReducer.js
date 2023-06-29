// Importing the dependencies
import { createSlice } from "@reduxjs/toolkit";
import { auth } from '../firebaseInit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Writing the function for the sign Up
export const signUp = (email, password) => async (dispatch) => {
  try {
    dispatch(signUpStart());

    await createUserWithEmailAndPassword(auth, email, password);

    dispatch(signUpSuccess());
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};

// Implementing the functon for singIn
export const signIn = (email, password) => async (dispatch) => {
  try {
    dispatch(signInStart());

    await signInWithEmailAndPassword(auth, email, password);

    dispatch(signInSuccess());
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};
// Importing the funciton for Logout
export const signOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);

    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutFailure(error.message));
  }
};
// Inititat State
const initialState = {
  loading: false,
  error: null,
  toogleSingIn: true,
  currentUser: null,
};

// Implementing the redux-reducer
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.currentUser = auth.currentUser; // Set the currentUser in the state
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.currentUser = null; // Clear the currentUser from the state
    },
    signOutFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    toogleForm: (state) => {
      state.toogleSingIn = !state.toogleSingIn;
    },
  },
});
// exporting the reducer and action
export const {
  signUpStart,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signInStart,
  signOutSuccess,
  signOutFailure,
  toogleForm
} = authSlice.actions;

export default authSlice.reducer;
