import { useEffect, useState } from "react";

const useMounted = () => {
  const [mounted, setMoutned] = useState(false);

  useEffect(() => {
    setMoutned(true);
  }, []);

  return mounted;
};

export default useMounted;
