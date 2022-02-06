import dayjs from 'dayjs';

const today = () => {
  return dayjs().format('YYYY-MM-DD');
};

const weekAgo = () => {
  return dayjs().subtract(7, 'day').format('YYYY-MM-DD');
};

const monthAgo = () => {
  return dayjs().subtract(1, 'month').format('YYYY-MM-DD');
};

const weekDates = () => {
  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    weekDates.push(dayjs().subtract(i, 'day').format('YYYY-MM-DD'));
  }
  return weekDates.reverse();
};

const monthDates = () => {
  const monthDates = [];
  for (let i = 0; i < 30; i++) {
    monthDates.push(dayjs().subtract(i, 'day').format('YYYY-MM-DD'));
  }
  return monthDates.reverse();
};

const monthOfYear = () => {
  return dayjs().format('MMMM');
};
export const UtilDate = {
  today,
  weekAgo,
  monthAgo,
  weekDates,
  monthDates,
  monthOfYear,
};
