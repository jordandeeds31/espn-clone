export const formatTime = (time: string) => {
  const utcDate = new Date(time);
  return utcDate.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
