import React, { ChangeEvent } from "react";
import SanchitComponentController from "./sanchit-component-controller";

const SanchitComponent: React.FC = () => {
  const { state, setState } = SanchitComponentController();
  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setState(e.target.value)
        }
      />
    </div>
  );
};

export default SanchitComponent;
