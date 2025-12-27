import { useQuery } from "@tanstack/react-query";
import { usersData } from "@/services/Users";
import { UserTypes } from "@/types/projectTypes";

export default function useFetch(randomKey: { randomKey: string }) {
  const { data, isLoading, error } = useQuery<UserTypes[], Error>({
    queryKey: ["users", randomKey],
    queryFn: usersData,
    staleTime: 1000 * 60 * 2 * 24,
  });

  return { data, isLoading, error };
}
