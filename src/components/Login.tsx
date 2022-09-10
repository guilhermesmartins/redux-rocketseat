import React from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "St Peter",
              age: 2000,
              email: "peter@holy.saint",
            })
          )
        }
      >
        login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Login;
