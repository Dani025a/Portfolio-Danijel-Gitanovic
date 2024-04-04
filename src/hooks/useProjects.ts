import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from "ms";
import { ProjectQuery } from "../App";

export interface Project {
  id: number;
  name: string;
  description: string;
  githubRepo: string;
  images: Images[];
  techStack: TechStackItem[];
}

export interface TechStackItem {
  id: number;
  name: string;
  icon: string;
}

export interface Images {
  id: number;
  image: string;
}

const apiClient = new ApiClient<Project>("/Projects");

const useProjects = (projectQuery: ProjectQuery) => {
  return useQuery({
    queryKey: ["Projects", projectQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          iconId: projectQuery.iconId,
        },
      }),
    staleTime: ms("5s"),
  });
};

export default useProjects;
