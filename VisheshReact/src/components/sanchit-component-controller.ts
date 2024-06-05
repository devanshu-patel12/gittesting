import { useState } from "react";

const SanchitComponentController = () => {
  const [state, setState] = useState<string>("Value");
  return {
    state,
    setState,
  };
};

export default SanchitComponentController;
