import { useEffect, useState } from "react";
import ProjectList, { MernProjects } from "./ProjectList";

const useMernProjects = () => {
  const [mernProjects, setMernProjects] = useState([]);

  useEffect(() => {
    setMernProjects(MernProjects);
  }, []);
  return mernProjects;
};

export default useMernProjects;
