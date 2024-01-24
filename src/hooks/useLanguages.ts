import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";


export interface Language {
  id: number;
  name: string;
  icon: string
}

const apiClient = new ApiClient<Language>("/languages");


const useLanguages = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: apiClient.getAll,
    staleTime: ms("5s"),
  });
};

export default useLanguages;