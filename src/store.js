import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/Redux/authReducer";

// Redux Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
