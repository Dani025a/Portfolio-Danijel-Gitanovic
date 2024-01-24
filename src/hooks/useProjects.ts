import { useQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { ProjectQuery } from "../App";

export interface Project {
    name: string;
    description: string;
    images: string[];
    techStack: { name: string; icon: string }[];
    githubRepo: string;
  }
  
const apiClient = new ApiClient<Project>("/Projects");

const useProjects = (projectQuery: ProjectQuery) => {
  return useQuery({
    queryKey: ["Projects", projectQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          languageId: projectQuery.languageId,
        },
      }),
    staleTime: ms("5s"),
  });
};


export default useProjects;