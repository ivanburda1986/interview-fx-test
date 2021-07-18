import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleLoadServerFXPairs } from "../../actions/fxPairs";

import FXPair from "../../components/FXPair/FXPair";

export default function FXPairsList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(handleLoadServerFXPairs());
  }, [dispatch]);

  return (
    <div>
      <FXPair currencyCode={"HUF"} />
    </div>
  );
}
