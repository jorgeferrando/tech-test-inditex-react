export const convertUrlsToLinks = (str: string): string => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return str.replace(urlRegex, '<a href="$1">$1</a>');
};
export const replaceNewlinesWithBr = (str: string): string => {
  return str.replace(/\n/g, "<br/>");
};
