import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/v1/auth/login", user);
    // .then(res => console.log("res: ", res))
    // .then(err => console.log(err));
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};
