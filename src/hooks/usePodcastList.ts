import { useQuery } from "@tanstack/react-query";
import fetchPodcastList from "../repositories/fetchPodcastList";

export default function usePodcastList() {
  const results = useQuery(["podcasts"], fetchPodcastList);
  const data = results?.data?.contents ?? "[]";
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  return [parsedData?.feed?.entry ?? [], results.status];
}
