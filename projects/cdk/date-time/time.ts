/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />

import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {tuiInRange} from '@taiga-ui/cdk/utils/math';

import {
    HOURS_IN_DAY,
    MILLISECONDS_IN_DAY,
    MILLISECONDS_IN_HOUR,
    MILLISECONDS_IN_MINUTE,
    MILLISECONDS_IN_SECOND,
    MINUTES_IN_HOUR,
    SECONDS_IN_MINUTE,
} from './date-time';
import type {TuiTimeLike, TuiTimeMode} from './types';

/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export class TuiTime implements TuiTimeLike {
    constructor(
        public readonly hours: number,
        public readonly minutes: number,
        public readonly seconds = 0,
        public readonly ms = 0,
    ) {
        ngDevMode &&
            console.assert(
                // Currently `TuiTime` could have hours more than 23
                // in order to not break current behaviour of `isValidTime` the logic is duplicated
                Number.isInteger(hours) &&
                    tuiInRange(hours, 0, Infinity) &&
                    Number.isInteger(minutes) &&
                    tuiInRange(minutes, 0, MINUTES_IN_HOUR) &&
                    Number.isInteger(seconds) &&
                    tuiInRange(seconds, 0, SECONDS_IN_MINUTE) &&
                    Number.isInteger(ms) &&
                    tuiInRange(ms, 0, 1000),
                'Time must be real, but got:',
                hours,
                minutes,
                seconds,
                ms,
            );
    }

    /**
     * Checks if time is valid
     */
    public static isValidTime(
        hours: number,
        minutes: number,
        seconds = 0,
        ms = 0,
    ): boolean {
        return (
            Number.isInteger(hours) &&
            tuiInRange(hours, 0, HOURS_IN_DAY) &&
            Number.isInteger(minutes) &&
            tuiInRange(minutes, 0, MINUTES_IN_HOUR) &&
            Number.isInteger(seconds) &&
            tuiInRange(seconds, 0, SECONDS_IN_MINUTE) &&
            Number.isInteger(ms) &&
            tuiInRange(ms, 0, 1000)
        );
    }

    /**
     * Current UTC time.
     */
    public static current(): TuiTime {
        return TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
    }

    /**
     * Current time in local timezone
     */
    public static currentLocal(): TuiTime {
        const date = new Date();

        return TuiTime.fromAbsoluteMilliseconds(
            (Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) %
                MILLISECONDS_IN_DAY,
        );
    }

    /**
     * Calculates TuiTime from milliseconds
     */
    public static fromAbsoluteMilliseconds(milliseconds: number): TuiTime {
        ngDevMode && console.assert(Number.isInteger(milliseconds));
        ngDevMode &&
            console.assert(
                tuiInRange(milliseconds, 0, MILLISECONDS_IN_DAY),
                `Milliseconds must be below ${MILLISECONDS_IN_DAY} (milliseconds in a day).`,
            );

        const hours = Math.floor(milliseconds / MILLISECONDS_IN_HOUR);
        const minutes = Math.floor(
            (milliseconds % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE,
        );
        const seconds =
            Math.floor(
                ((milliseconds % MILLISECONDS_IN_HOUR) % MILLISECONDS_IN_MINUTE) / 1000,
            ) || 0;
        const ms =
            Math.floor(
                ((milliseconds % MILLISECONDS_IN_HOUR) % MILLISECONDS_IN_MINUTE) % 1000,
            ) || 0;

        return new TuiTime(hours, minutes, seconds, ms);
    }

    /**
     * Parses string into TuiTime object
     */
    public static fromString(time: string): TuiTime {
        const hours = this.parseHours(time);
        const minutes = Number(time.slice(3, 5)) || 0;
        const seconds = Number(time.slice(6, 8)) || 0;
        const ms = Number(time.slice(9, 12)) || 0;

        return new TuiTime(hours, minutes, seconds, ms);
    }

    /**
     * Converts Date object into TuiTime
     * @param date
     */
    public static fromLocalNativeDate(date: Date): TuiTime {
        return new TuiTime(
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        );
    }

    private static parseMeridiemPeriod(time: string): 'AM' | 'PM' | null {
        return (
            (/[AP]M/.exec(time.toUpperCase().replaceAll(/\W/g, ''))?.[0] as
                | 'AM'
                | 'PM') || null
        );
    }

    private static parseHours(time: string): number {
        const hours = Number(time.slice(0, 2));
        const meridiem = this.parseMeridiemPeriod(time);

        if (!meridiem) {
            return hours;
        }

        if (hours === 12) {
            return meridiem === 'AM' ? 0 : 12;
        }

        return meridiem === 'PM' ? hours + 12 : hours;
    }

    /**
     * Shifts time by hours and minutes
     */
    public shift({hours = 0, minutes = 0, seconds = 0, ms = 0}: TuiTimeLike): TuiTime {
        const totalMs =
            this.toAbsoluteMilliseconds() +
            hours * MILLISECONDS_IN_HOUR +
            minutes * MILLISECONDS_IN_MINUTE +
            seconds * MILLISECONDS_IN_SECOND +
            ms;
        const totalSeconds = Math.floor(totalMs / MILLISECONDS_IN_SECOND);
        const totalMinutes = Math.floor(totalSeconds / SECONDS_IN_MINUTE);
        const totalHours = Math.floor(totalMinutes / MINUTES_IN_HOUR);

        return new TuiTime(
            this.normalizeToRange(totalHours, HOURS_IN_DAY),
            this.normalizeToRange(totalMinutes, MINUTES_IN_HOUR),
            this.normalizeToRange(totalSeconds, SECONDS_IN_MINUTE),
            this.normalizeToRange(totalMs, MILLISECONDS_IN_SECOND),
        );
    }

    /**
     * Converts TuiTime to string
     */
    public toString(mode?: TuiTimeMode): string {
        const needAddMs = mode?.startsWith('HH:MM:SS.MSS') || (!mode && this.ms > 0);
        const needAddSeconds =
            needAddMs || mode?.startsWith('HH:MM:SS') || (!mode && this.seconds > 0);
        const {hours = this.hours, meridiem = ''} = mode?.includes('AA')
            ? this.toTwelveHour(this.hours)
            : {};
        const hhMm = `${this.formatTime(hours)}:${this.formatTime(this.minutes)}`;
        const ss = needAddSeconds ? `:${this.formatTime(this.seconds)}` : '';
        const mss = needAddMs ? `.${this.formatTime(this.ms, 3)}` : '';
        const aa = meridiem && `${CHAR_NO_BREAK_SPACE}${meridiem}`;

        return `${hhMm}${ss}${mss}${aa}`;
    }

    public valueOf(): number {
        return this.toAbsoluteMilliseconds();
    }

    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    public [Symbol.toPrimitive](hint: string): number | string {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }

    /**
     * Converts TuiTime to milliseconds
     */
    public toAbsoluteMilliseconds(): number {
        return (
            this.hours * MILLISECONDS_IN_HOUR +
            this.minutes * MILLISECONDS_IN_MINUTE +
            this.seconds * 1000 +
            this.ms
        );
    }

    private formatTime(time: number, digits = 2): string {
        return String(time).padStart(digits, '0');
    }

    private toTwelveHour(hours: number): {hours: number; meridiem: string} {
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        if (hours === 0 || hours === 12) {
            return {meridiem, hours: 12};
        }

        return {meridiem, hours: hours % 12};
    }

    private normalizeToRange(value: number, modulus: number): number {
        return ((value % modulus) + modulus) % modulus;
    }
}
