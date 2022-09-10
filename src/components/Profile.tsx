import React from "react";
import { useSelector } from "react-redux";
import { ReduxData, UserData } from "../features/user";

function Profile() {
  const user = useSelector<ReduxData>((state) => state.user.value) as UserData;

  return (
    <div>
      <h1>Profile page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
