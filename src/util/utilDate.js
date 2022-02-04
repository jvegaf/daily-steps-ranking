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

export const UtilDate = { today, weekAgo, monthAgo };
