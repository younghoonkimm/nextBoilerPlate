import React from "react";
import styled from "styled-components";

import useUser from "../store/modules/user/hooks";

const ADSF = styled.div`
  width: 20px;
`;

function Example() {
  const { login } = useUser();
  return (
    <div>
      <ADSF />
      <button type="button" onClick={login}>
        logout
      </button>
    </div>
  );
}

export default Example;
