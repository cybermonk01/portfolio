import { useEffect, useState } from "react";
import ProjectList, { TailwindProjects } from "./ProjectList";

const useTailwindProjects = () => {
  const [tailwindProjects, setTailwindProjects] = useState([]);

  useEffect(() => {
    setTailwindProjects(TailwindProjects);
  }, []);
  return tailwindProjects;
};

export default useTailwindProjects;
