export const filterPodcasts = (podcasts: any[], searchTerm: string) => {
  return podcasts.filter((podcast: any) => {
    if (searchTerm === "") {
      return true;
    } else if (
      podcast["im:name"].label
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      podcast["im:artist"].label
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    return false;
  });
};
