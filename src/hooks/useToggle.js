import { useState } from "react";

function useToggle() {
  const [on, setOn] = useState(false);

  const toggler = () => {
    setOn((on) => !on);
  };

  return { on, toggler };
}

export default useToggle;