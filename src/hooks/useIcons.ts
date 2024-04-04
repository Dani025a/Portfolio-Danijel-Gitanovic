import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";


export interface Icon {
  id: number;
  name: string;
  icon: string
}

const apiClient = new ApiClient<Icon>("/icons");


const useIcons = () => {
  return useQuery({
    queryKey: ["icons"],
    queryFn: apiClient.getAll,
    staleTime: ms("5s"),
  });
};

export default useIcons;