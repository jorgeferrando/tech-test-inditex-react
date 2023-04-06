export const formatDate = (date: Date): string => {
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
}

export const duration = (milliseconds: number) : string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
  
    const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  
    return `${formattedHours}:${formattedMinutes}`;
  }