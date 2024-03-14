import { useEffect, useState } from "react";
import { ProjectList } from "./ProjectList";

const useProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [tailwindProjects, setTailwindProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectList);
    setTailwindProjects(tailwindProjects);
    console.log(projects);
  }, []);
  return projects;
};

export default useProjectList;
