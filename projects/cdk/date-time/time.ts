import {tuiAssert} from '@taiga-ui/cdk/classes';
import {TuiTimeLike} from '@taiga-ui/cdk/interfaces';
import {TuiTimeMode} from '@taiga-ui/cdk/types';
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

/**
 * Immutable time object with hours, minutes, seconds and ms
 */
export class TuiTime implements TuiTimeLike {
    constructor(
        readonly hours: number,
        readonly minutes: number,
        readonly seconds: number = 0,
        readonly ms: number = 0,
    ) {
        ngDevMode &&
            tuiAssert.assert(
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
    static isValidTime(
        hours: number,
        minutes: number,
        seconds: number = 0,
        ms: number = 0,
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
    static current(): TuiTime {
        return TuiTime.fromAbsoluteMilliseconds(Date.now() % MILLISECONDS_IN_DAY);
    }

    /**
     * Current time in local timezone
     */
    static currentLocal(): TuiTime {
        const date = new Date();

        return TuiTime.fromAbsoluteMilliseconds(
            (Date.now() - date.getTimezoneOffset() * MILLISECONDS_IN_MINUTE) %
                MILLISECONDS_IN_DAY,
        );
    }

    /**
     * Calculates TuiTime from milliseconds
     */
    static fromAbsoluteMilliseconds(milliseconds: number): TuiTime {
        ngDevMode && tuiAssert.assert(Number.isInteger(milliseconds));
        ngDevMode &&
            tuiAssert.assert(
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
    static fromString(time: string): TuiTime {
        const hours = Number(time.slice(0, 2));
        const minutes = Number(time.slice(3, 5));
        const seconds = Number(time.slice(6, 8)) || 0;
        const ms = Number(time.slice(9, 12)) || 0;

        return new TuiTime(hours, minutes, seconds, ms);
    }

    /**
     * Converts Date object into TuiTime
     * @param date
     */
    static fromLocalNativeDate(date: Date): TuiTime {
        return new TuiTime(
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        );
    }

    /**
     * Shifts time by hours and minutes
     */
    shift({hours = 0, minutes = 0, seconds = 0, ms = 0}: TuiTimeLike): TuiTime {
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
    toString(mode?: TuiTimeMode): string {
        const needAddMs = mode === 'HH:MM:SS.MSS' || (!mode && this.ms > 0);
        const needAddSeconds =
            needAddMs || mode === 'HH:MM:SS' || (!mode && this.seconds > 0);

        return (
            `${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}` +
            `${needAddSeconds ? `:${this.formatTime(this.seconds)}` : ''}` +
            `${needAddMs ? `.${this.formatTime(this.ms, 3)}` : ''}`
        );
    }

    valueOf(): number {
        return this.toAbsoluteMilliseconds();
    }

    /**
     * Returns the primitive value of the given Date object.
     * Depending on the argument, the method can return either a string or a number.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
     */
    [Symbol.toPrimitive](hint: string): number | string {
        return Date.prototype[Symbol.toPrimitive].call(this, hint);
    }

    /**
     * Converts TuiTime to milliseconds
     */
    toAbsoluteMilliseconds(): number {
        return (
            this.hours * MILLISECONDS_IN_HOUR +
            this.minutes * MILLISECONDS_IN_MINUTE +
            this.seconds * 1000 +
            this.ms
        );
    }

    private formatTime(time: number, digits: number = 2): string {
        return String(time).padStart(digits, '0');
    }

    private normalizeToRange(value: number, modulus: number): number {
        return ((value % modulus) + modulus) % modulus;
    }
}
