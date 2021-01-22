import {tuiAssert} from '@taiga-ui/cdk/classes';
import {TuiTimeLike} from '@taiga-ui/cdk/interfaces';
import {TuiTimeMode} from '@taiga-ui/cdk/types';
import {padStart} from '@taiga-ui/cdk/utils/format';
import {inRange} from '@taiga-ui/cdk/utils/math';
import {
    HOURS_IN_DAY,
    MILLISECONDS_IN_DAY,
    MILLISECONDS_IN_HOUR,
    MILLISECONDS_IN_MINUTE,
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
        tuiAssert.assert(
            TuiTime.isValidTime(hours, minutes, seconds, ms),
            'Time must be real, but got:',
            hours,
            minutes,
            seconds,
            ms,
        );
    }

    /**
     * Shifts time by hours and minutes
     */
    shift({hours = 0, minutes = 0, seconds = 0, ms = 0}: TuiTimeLike): TuiTime {
        const newMs = (1000 + this.ms + (ms % 1000)) % 1000;

        const secondsInMs = ms < 0 ? Math.ceil(ms / 1000) : Math.floor(ms / 1000);
        const secondsToAdd = secondsInMs + seconds;
        const newSeconds = (60 + this.seconds + (secondsToAdd % 60)) % 60;

        const minutesInSeconds =
            secondsToAdd < 0
                ? Math.ceil(secondsToAdd / 60)
                : Math.floor(secondsToAdd / 60);
        const minutesToAdd = minutesInSeconds + minutes;
        const newMinutes = (60 + this.minutes + (minutesToAdd % 60)) % 60;

        const hoursInMinutes =
            minutesToAdd < 0
                ? Math.ceil(minutesToAdd / 60)
                : Math.floor(minutesToAdd / 60);
        const hoursToAdd = hoursInMinutes + hours;
        const newHours = (24 + this.hours + (hoursToAdd % 24)) % 24;

        return new TuiTime(newHours, newMinutes, newSeconds, newMs);
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
            `${needAddSeconds ? ':' + this.formatTime(this.seconds) : ''}` +
            `${needAddMs ? '.' + this.formatTime(this.ms, 3) : ''}`
        );
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
            inRange(hours, 0, HOURS_IN_DAY) &&
            Number.isInteger(minutes) &&
            inRange(minutes, 0, MINUTES_IN_HOUR) &&
            Number.isInteger(seconds) &&
            inRange(seconds, 0, SECONDS_IN_MINUTE) &&
            Number.isInteger(ms) &&
            inRange(ms, 0, 1000)
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
        tuiAssert.assert(Number.isInteger(milliseconds));
        tuiAssert.assert(
            inRange(milliseconds, 0, MILLISECONDS_IN_DAY),
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

    private formatTime(time: number, digits: number = 2): string {
        return padStart(time.toString(), digits, '0');
    }
}
