import { useCallback } from "react";
import { useState } from "react";

const useToggle = (initial) => {
  const [massachusetts, setMassachusetts] = useState(initial);
  const toggle = useCallback(() => setMassachusetts((p) => !p), []);

  return [massachusetts, toggle];
};

export default useToggle;
