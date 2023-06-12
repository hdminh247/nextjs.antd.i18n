import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const getRelativeDate = (currentDate: string) => {
  dayjs.extend(relativeTime);

  const today = dayjs(new Date());
  if (today.diff(dayjs(currentDate), "days") >= 1) {
    return dayjs(currentDate).fromNow(); // '1 days ago' etc.
  }
  return dayjs(currentDate).format("hh:mm");
};
