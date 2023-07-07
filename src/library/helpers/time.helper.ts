import time from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

time.extend(duration);
time.extend(relativeTime);
time.extend(localizedFormat);

export { time };
