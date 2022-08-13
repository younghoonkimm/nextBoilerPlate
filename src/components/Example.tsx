import React from "react";
import useUser from "../store/modules/user/hooks";

function Example() {
  const { isLoggedIn, login } = useUser();
  return (
    <div>
      {/* <button type="button" onClick={login}>
        logout
      </button> */}
    </div>
  );
}

export default Example;
