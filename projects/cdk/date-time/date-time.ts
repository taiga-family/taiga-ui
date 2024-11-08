import {CHAR_EN_DASH, CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';

export const DAYS_IN_WEEK = 7;

export const DAYS_IN_NORMAL_YEAR = 365;

export const DAYS_IN_LEAP_YEAR = 366;

export const MONTHS_IN_YEAR = 12;

export const MIN_DAY = 1;

export const MIN_MONTH = 0;

export const MAX_MONTH = 11;

export const MIN_YEAR = 100;

export const MAX_YEAR = 9999;

export const MAX_DISPLAYED_YEAR = 2099;

export const RANGE_SEPARATOR_CHAR = `${CHAR_NO_BREAK_SPACE}${CHAR_EN_DASH}${CHAR_NO_BREAK_SPACE}`;

export const MILLISECONDS_IN_SECOND = 1000;

export const SECONDS_IN_MINUTE = 60;

export const MINUTES_IN_HOUR = 60;

export const HOURS_IN_DAY = 24;

export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE;

export const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR;

export const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * HOURS_IN_DAY;
