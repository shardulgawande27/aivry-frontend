import React from "react";

import { usePathname } from "next/navigation";

const useSidebar = () => {
  const pathname = usePathname();
  return { pathname };
};

export default useSidebar;
