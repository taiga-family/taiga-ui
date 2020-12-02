/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __decorate, __metadata, __param } from "tslib";
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { formatDate } from '../i18n/format_date';
import { invalidPipeArgumentError } from './invalid_pipe_argument_error';
// clang-format off
/**
 * @ngModule CommonModule
 * @description
 *
 * Formats a date value according to locale rules.
 *
 * Only the `en-US` locale data comes with Angular. To localize dates
 * in another language, you must import the corresponding locale data.
 * See the [I18n guide](guide/i18n#i18n-pipes) for more information.
 *
 * @see `formatDate()`
 *
 *
 * @usageNotes
 *
 * The result of this pipe is not reevaluated when the input is mutated. To avoid the need to
 * reformat the date on every change-detection cycle, treat the date as an immutable object
 * and change the reference when the pipe needs to run again.
 *
 * ### Pre-defined format options
 *
 * Examples are given in `en-US` locale.
 *
 * - `'short'`: equivalent to `'M/d/yy, h:mm a'` (`6/15/15, 9:03 AM`).
 * - `'medium'`: equivalent to `'MMM d, y, h:mm:ss a'` (`Jun 15, 2015, 9:03:01 AM`).
 * - `'long'`: equivalent to `'MMMM d, y, h:mm:ss a z'` (`June 15, 2015 at 9:03:01 AM
 * GMT+1`).
 * - `'full'`: equivalent to `'EEEE, MMMM d, y, h:mm:ss a zzzz'` (`Monday, June 15, 2015 at
 * 9:03:01 AM GMT+01:00`).
 * - `'shortDate'`: equivalent to `'M/d/yy'` (`6/15/15`).
 * - `'mediumDate'`: equivalent to `'MMM d, y'` (`Jun 15, 2015`).
 * - `'longDate'`: equivalent to `'MMMM d, y'` (`June 15, 2015`).
 * - `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` (`Monday, June 15, 2015`).
 * - `'shortTime'`: equivalent to `'h:mm a'` (`9:03 AM`).
 * - `'mediumTime'`: equivalent to `'h:mm:ss a'` (`9:03:01 AM`).
 * - `'longTime'`: equivalent to `'h:mm:ss a z'` (`9:03:01 AM GMT+1`).
 * - `'fullTime'`: equivalent to `'h:mm:ss a zzzz'` (`9:03:01 AM GMT+01:00`).
 *
 * ### Custom format options
 *
 * You can construct a format string using symbols to specify the components
 * of a date-time value, as described in the following table.
 * Format details depend on the locale.
 * Fields marked with (*) are only available in the extra data set for the given locale.
 *
 *  | Field type         | Format      | Description                                                   | Example Value                                              |
 *  |--------------------|-------------|---------------------------------------------------------------|------------------------------------------------------------|
 *  | Era                | G, GG & GGG | Abbreviated                                                   | AD                                                         |
 *  |                    | GGGG        | Wide                                                          | Anno Domini                                                |
 *  |                    | GGGGG       | Narrow                                                        | A                                                          |
 *  | Year               | y           | Numeric: minimum digits                                       | 2, 20, 201, 2017, 20173                                    |
 *  |                    | yy          | Numeric: 2 digits + zero padded                               | 02, 20, 01, 17, 73                                         |
 *  |                    | yyy         | Numeric: 3 digits + zero padded                               | 002, 020, 201, 2017, 20173                                 |
 *  |                    | yyyy        | Numeric: 4 digits or more + zero padded                       | 0002, 0020, 0201, 2017, 20173                              |
 *  | Month              | M           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | MM          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | MMM         | Abbreviated                                                   | Sep                                                        |
 *  |                    | MMMM        | Wide                                                          | September                                                  |
 *  |                    | MMMMM       | Narrow                                                        | S                                                          |
 *  | Month standalone   | L           | Numeric: 1 digit                                              | 9, 12                                                      |
 *  |                    | LL          | Numeric: 2 digits + zero padded                               | 09, 12                                                     |
 *  |                    | LLL         | Abbreviated                                                   | Sep                                                        |
 *  |                    | LLLL        | Wide                                                          | September                                                  |
 *  |                    | LLLLL       | Narrow                                                        | S                                                          |
 *  | Week of year       | w           | Numeric: minimum digits                                       | 1... 53                                                    |
 *  |                    | ww          | Numeric: 2 digits + zero padded                               | 01... 53                                                   |
 *  | Week of month      | W           | Numeric: 1 digit                                              | 1... 5                                                     |
 *  | Day of month       | d           | Numeric: minimum digits                                       | 1                                                          |
 *  |                    | dd          | Numeric: 2 digits + zero padded                               | 01                                                          |
 *  | Week day           | E, EE & EEE | Abbreviated                                                   | Tue                                                        |
 *  |                    | EEEE        | Wide                                                          | Tuesday                                                    |
 *  |                    | EEEEE       | Narrow                                                        | T                                                          |
 *  |                    | EEEEEE      | Short                                                         | Tu                                                         |
 *  | Period             | a, aa & aaa | Abbreviated                                                   | am/pm or AM/PM                                             |
 *  |                    | aaaa        | Wide (fallback to `a` when missing)                           | ante meridiem/post meridiem                                |
 *  |                    | aaaaa       | Narrow                                                        | a/p                                                        |
 *  | Period*            | B, BB & BBB | Abbreviated                                                   | mid.                                                       |
 *  |                    | BBBB        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | BBBBB       | Narrow                                                        | md                                                         |
 *  | Period standalone* | b, bb & bbb | Abbreviated                                                   | mid.                                                       |
 *  |                    | bbbb        | Wide                                                          | am, pm, midnight, noon, morning, afternoon, evening, night |
 *  |                    | bbbbb       | Narrow                                                        | md                                                         |
 *  | Hour 1-12          | h           | Numeric: minimum digits                                       | 1, 12                                                      |
 *  |                    | hh          | Numeric: 2 digits + zero padded                               | 01, 12                                                     |
 *  | Hour 0-23          | H           | Numeric: minimum digits                                       | 0, 23                                                      |
 *  |                    | HH          | Numeric: 2 digits + zero padded                               | 00, 23                                                     |
 *  | Minute             | m           | Numeric: minimum digits                                       | 8, 59                                                      |
 *  |                    | mm          | Numeric: 2 digits + zero padded                               | 08, 59                                                     |
 *  | Second             | s           | Numeric: minimum digits                                       | 0... 59                                                    |
 *  |                    | ss          | Numeric: 2 digits + zero padded                               | 00... 59                                                   |
 *  | Fractional seconds | S           | Numeric: 1 digit                                              | 0... 9                                                     |
 *  |                    | SS          | Numeric: 2 digits + zero padded                               | 00... 99                                                   |
 *  |                    | SSS         | Numeric: 3 digits + zero padded (= milliseconds)              | 000... 999                                                 |
 *  | Zone               | z, zz & zzz | Short specific non location format (fallback to O)            | GMT-8                                                      |
 *  |                    | zzzz        | Long specific non location format (fallback to OOOO)          | GMT-08:00                                                  |
 *  |                    | Z, ZZ & ZZZ | ISO8601 basic format                                          | -0800                                                      |
 *  |                    | ZZZZ        | Long localized GMT format                                     | GMT-8:00                                                   |
 *  |                    | ZZZZZ       | ISO8601 extended format + Z indicator for offset 0 (= XXXXX)  | -08:00                                                     |
 *  |                    | O, OO & OOO | Short localized GMT format                                    | GMT-8                                                      |
 *  |                    | OOOO        | Long localized GMT format                                     | GMT-08:00                                                  |
 *
 * Note that timezone correction is not applied to an ISO string that has no time component, such as "2016-09-19"
 *
 * ### Format examples
 *
 * These examples transform a date into various formats,
 * assuming that `dateObj` is a JavaScript `Date` object for
 * year: 2015, month: 6, day: 15, hour: 21, minute: 43, second: 11,
 * given in the local time for the `en-US` locale.
 *
 * ```
 * {{ dateObj | date }}               // output is 'Jun 15, 2015'
 * {{ dateObj | date:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM'
 * {{ dateObj | date:'shortTime' }}   // output is '9:43 PM'
 * {{ dateObj | date:'mm:ss' }}       // output is '43:11'
 * ```
 *
 * ### Usage example
 *
 * The following component uses a date pipe to display the current date in different formats.
 *
 * ```
 * @Component({
 *  selector: 'date-pipe',
 *  template: `<div>
 *    <p>Today is {{today | date}}</p>
 *    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
 *    <p>The time is {{today | date:'h:mm a z'}}</p>
 *  </div>`
 * })
 * // Get the current date and time as a date-time value.
 * export class DatePipeComponent {
 *   today: number = Date.now();
 * }
 * ```
 *
 * @publicApi
 */
// clang-format on
var DatePipe = /** @class */ (function () {
    function DatePipe(locale) {
        this.locale = locale;
    }
    DatePipe_1 = DatePipe;
    /**
     * @param value The date expression: a `Date` object,  a number
     * (milliseconds since UTC epoch), or an ISO string (https://www.w3.org/TR/NOTE-datetime).
     * @param format The date/time components to include, using predefined options or a
     * custom format string.
     * @param timezone A timezone offset (such as `'+0430'`), or a standard
     * UTC/GMT or continental US timezone abbreviation.
     * When not supplied, uses the end-user's local system timezone.
     * @param locale A locale code for the locale format rules to use.
     * When not supplied, uses the value of `LOCALE_ID`, which is `en-US` by default.
     * See [Setting your app locale](guide/i18n#setting-up-the-locale-of-your-app).
     * @returns A date string in the desired format.
     */
    DatePipe.prototype.transform = function (value, format, timezone, locale) {
        if (format === void 0) { format = 'mediumDate'; }
        if (value == null || value === '' || value !== value)
            return null;
        try {
            return formatDate(value, format, locale || this.locale, timezone);
        }
        catch (error) {
            throw invalidPipeArgumentError(DatePipe_1, error.message);
        }
    };
    var DatePipe_1;
    DatePipe = DatePipe_1 = __decorate([
        Pipe({ name: 'date', pure: true }),
        __param(0, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [String])
    ], DatePipe);
    return DatePipe;
}());
export { DatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZV9waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9waXBlcy9kYXRlX3BpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQy9DLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRXZFLG1CQUFtQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5SUc7QUFDSCxrQkFBa0I7QUFFbEI7SUFDRSxrQkFBdUMsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO2lCQUQ5QyxRQUFRO0lBR25COzs7Ozs7Ozs7Ozs7T0FZRztJQUNILDRCQUFTLEdBQVQsVUFBVSxLQUFVLEVBQUUsTUFBcUIsRUFBRSxRQUFpQixFQUFFLE1BQWU7UUFBekQsdUJBQUEsRUFBQSxxQkFBcUI7UUFDekMsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxLQUFLLEtBQUs7WUFBRSxPQUFPLElBQUksQ0FBQztRQUVsRSxJQUFJO1lBQ0YsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNuRTtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSx3QkFBd0IsQ0FBQyxVQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQzs7SUF4QlUsUUFBUTtRQURwQixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUVsQixXQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7T0FEbkIsUUFBUSxDQXlCcEI7SUFBRCxlQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIExPQ0FMRV9JRCwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Zvcm1hdERhdGV9IGZyb20gJy4uL2kxOG4vZm9ybWF0X2RhdGUnO1xuaW1wb3J0IHtpbnZhbGlkUGlwZUFyZ3VtZW50RXJyb3J9IGZyb20gJy4vaW52YWxpZF9waXBlX2FyZ3VtZW50X2Vycm9yJztcblxuLy8gY2xhbmctZm9ybWF0IG9mZlxuLyoqXG4gKiBAbmdNb2R1bGUgQ29tbW9uTW9kdWxlXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiBGb3JtYXRzIGEgZGF0ZSB2YWx1ZSBhY2NvcmRpbmcgdG8gbG9jYWxlIHJ1bGVzLlxuICpcbiAqIE9ubHkgdGhlIGBlbi1VU2AgbG9jYWxlIGRhdGEgY29tZXMgd2l0aCBBbmd1bGFyLiBUbyBsb2NhbGl6ZSBkYXRlc1xuICogaW4gYW5vdGhlciBsYW5ndWFnZSwgeW91IG11c3QgaW1wb3J0IHRoZSBjb3JyZXNwb25kaW5nIGxvY2FsZSBkYXRhLlxuICogU2VlIHRoZSBbSTE4biBndWlkZV0oZ3VpZGUvaTE4biNpMThuLXBpcGVzKSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBAc2VlIGBmb3JtYXREYXRlKClgXG4gKlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVGhlIHJlc3VsdCBvZiB0aGlzIHBpcGUgaXMgbm90IHJlZXZhbHVhdGVkIHdoZW4gdGhlIGlucHV0IGlzIG11dGF0ZWQuIFRvIGF2b2lkIHRoZSBuZWVkIHRvXG4gKiByZWZvcm1hdCB0aGUgZGF0ZSBvbiBldmVyeSBjaGFuZ2UtZGV0ZWN0aW9uIGN5Y2xlLCB0cmVhdCB0aGUgZGF0ZSBhcyBhbiBpbW11dGFibGUgb2JqZWN0XG4gKiBhbmQgY2hhbmdlIHRoZSByZWZlcmVuY2Ugd2hlbiB0aGUgcGlwZSBuZWVkcyB0byBydW4gYWdhaW4uXG4gKlxuICogIyMjIFByZS1kZWZpbmVkIGZvcm1hdCBvcHRpb25zXG4gKlxuICogRXhhbXBsZXMgYXJlIGdpdmVuIGluIGBlbi1VU2AgbG9jYWxlLlxuICpcbiAqIC0gYCdzaG9ydCdgOiBlcXVpdmFsZW50IHRvIGAnTS9kL3l5LCBoOm1tIGEnYCAoYDYvMTUvMTUsIDk6MDMgQU1gKS5cbiAqIC0gYCdtZWRpdW0nYDogZXF1aXZhbGVudCB0byBgJ01NTSBkLCB5LCBoOm1tOnNzIGEnYCAoYEp1biAxNSwgMjAxNSwgOTowMzowMSBBTWApLlxuICogLSBgJ2xvbmcnYDogZXF1aXZhbGVudCB0byBgJ01NTU0gZCwgeSwgaDptbTpzcyBhIHonYCAoYEp1bmUgMTUsIDIwMTUgYXQgOTowMzowMSBBTVxuICogR01UKzFgKS5cbiAqIC0gYCdmdWxsJ2A6IGVxdWl2YWxlbnQgdG8gYCdFRUVFLCBNTU1NIGQsIHksIGg6bW06c3MgYSB6enp6J2AgKGBNb25kYXksIEp1bmUgMTUsIDIwMTUgYXRcbiAqIDk6MDM6MDEgQU0gR01UKzAxOjAwYCkuXG4gKiAtIGAnc2hvcnREYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdNL2QveXknYCAoYDYvMTUvMTVgKS5cbiAqIC0gYCdtZWRpdW1EYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdNTU0gZCwgeSdgIChgSnVuIDE1LCAyMDE1YCkuXG4gKiAtIGAnbG9uZ0RhdGUnYDogZXF1aXZhbGVudCB0byBgJ01NTU0gZCwgeSdgIChgSnVuZSAxNSwgMjAxNWApLlxuICogLSBgJ2Z1bGxEYXRlJ2A6IGVxdWl2YWxlbnQgdG8gYCdFRUVFLCBNTU1NIGQsIHknYCAoYE1vbmRheSwgSnVuZSAxNSwgMjAxNWApLlxuICogLSBgJ3Nob3J0VGltZSdgOiBlcXVpdmFsZW50IHRvIGAnaDptbSBhJ2AgKGA5OjAzIEFNYCkuXG4gKiAtIGAnbWVkaXVtVGltZSdgOiBlcXVpdmFsZW50IHRvIGAnaDptbTpzcyBhJ2AgKGA5OjAzOjAxIEFNYCkuXG4gKiAtIGAnbG9uZ1RpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW06c3MgYSB6J2AgKGA5OjAzOjAxIEFNIEdNVCsxYCkuXG4gKiAtIGAnZnVsbFRpbWUnYDogZXF1aXZhbGVudCB0byBgJ2g6bW06c3MgYSB6enp6J2AgKGA5OjAzOjAxIEFNIEdNVCswMTowMGApLlxuICpcbiAqICMjIyBDdXN0b20gZm9ybWF0IG9wdGlvbnNcbiAqXG4gKiBZb3UgY2FuIGNvbnN0cnVjdCBhIGZvcm1hdCBzdHJpbmcgdXNpbmcgc3ltYm9scyB0byBzcGVjaWZ5IHRoZSBjb21wb25lbnRzXG4gKiBvZiBhIGRhdGUtdGltZSB2YWx1ZSwgYXMgZGVzY3JpYmVkIGluIHRoZSBmb2xsb3dpbmcgdGFibGUuXG4gKiBGb3JtYXQgZGV0YWlscyBkZXBlbmQgb24gdGhlIGxvY2FsZS5cbiAqIEZpZWxkcyBtYXJrZWQgd2l0aCAoKikgYXJlIG9ubHkgYXZhaWxhYmxlIGluIHRoZSBleHRyYSBkYXRhIHNldCBmb3IgdGhlIGdpdmVuIGxvY2FsZS5cbiAqXG4gKiAgfCBGaWVsZCB0eXBlICAgICAgICAgfCBGb3JtYXQgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFeGFtcGxlIFZhbHVlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8LS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogIHwgRXJhICAgICAgICAgICAgICAgIHwgRywgR0cgJiBHR0cgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQUQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgICAgICB8IFdpZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBBbm5vIERvbWluaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgWWVhciAgICAgICAgICAgICAgIHwgeSAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMiwgMjAsIDIwMSwgMjAxNywgMjAxNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMiwgMjAsIDAxLCAxNywgNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgICAgIHwgTnVtZXJpYzogMyBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAwMiwgMDIwLCAyMDEsIDIwMTcsIDIwMTczICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICAgICAgfCBOdW1lcmljOiA0IGRpZ2l0cyBvciBtb3JlICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgIHwgMDAwMiwgMDAyMCwgMDIwMSwgMjAxNywgMjAxNzMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBNb250aCAgICAgICAgICAgICAgfCBNICAgICAgICAgICB8IE51bWVyaWM6IDEgZGlnaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCA5LCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDA5LCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICAgICAgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgICAgICB8IFdpZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTZXB0ZW1iZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgTW9udGggc3RhbmRhbG9uZSAgIHwgTCAgICAgICAgICAgfCBOdW1lcmljOiAxIGRpZ2l0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwOSwgMTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgICAgIHwgQWJicmV2aWF0ZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNlcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICAgICAgfCBXaWRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU2VwdGVtYmVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgICAgICB8IE5hcnJvdyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8IFdlZWsgb2YgeWVhciAgICAgICB8IHcgICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEuLi4gNTMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEuLi4gNTMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBXZWVrIG9mIG1vbnRoICAgICAgfCBXICAgICAgICAgICB8IE51bWVyaWM6IDEgZGlnaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxLi4uIDUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8IERheSBvZiBtb250aCAgICAgICB8IGQgICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgV2VlayBkYXkgICAgICAgICAgIHwgRSwgRUUgJiBFRUUgfCBBYmJyZXZpYXRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVHVlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgICAgICB8IFdpZGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUdWVzZGF5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgICAgIHwgTmFycm93ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICAgICAgfCBTaG9ydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVHUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBQZXJpb2QgICAgICAgICAgICAgfCBhLCBhYSAmIGFhYSB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbS9wbSBvciBBTS9QTSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgICAgIHwgV2lkZSAoZmFsbGJhY2sgdG8gYGFgIHdoZW4gbWlzc2luZykgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFudGUgbWVyaWRpZW0vcG9zdCBtZXJpZGllbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICAgICAgfCBOYXJyb3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS9wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBQZXJpb2QqICAgICAgICAgICAgfCBCLCBCQiAmIEJCQiB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtaWQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFtLCBwbSwgbWlkbmlnaHQsIG5vb24sIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHQgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICAgICAgfCBOYXJyb3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBQZXJpb2Qgc3RhbmRhbG9uZSogfCBiLCBiYiAmIGJiYiB8IEFiYnJldmlhdGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtaWQuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgICAgIHwgV2lkZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFtLCBwbSwgbWlkbmlnaHQsIG5vb24sIG1vcm5pbmcsIGFmdGVybm9vbiwgZXZlbmluZywgbmlnaHQgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICAgICAgfCBOYXJyb3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBIb3VyIDEtMTIgICAgICAgICAgfCBoICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxLCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAxLCAxMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgSG91ciAwLTIzICAgICAgICAgIHwgSCAgICAgICAgICAgfCBOdW1lcmljOiBtaW5pbXVtIGRpZ2l0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMCwgMjMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMCwgMjMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8IE1pbnV0ZSAgICAgICAgICAgICB8IG0gICAgICAgICAgIHwgTnVtZXJpYzogbWluaW11bSBkaWdpdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDgsIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICAgICAgfCBOdW1lcmljOiAyIGRpZ2l0cyArIHplcm8gcGFkZGVkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMDgsIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCBTZWNvbmQgICAgICAgICAgICAgfCBzICAgICAgICAgICB8IE51bWVyaWM6IG1pbmltdW0gZGlnaXRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwLi4uIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgICAgIHwgTnVtZXJpYzogMiBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDAwLi4uIDU5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgRnJhY3Rpb25hbCBzZWNvbmRzIHwgUyAgICAgICAgICAgfCBOdW1lcmljOiAxIGRpZ2l0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMC4uLiA5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgICAgICB8IE51bWVyaWM6IDIgZGlnaXRzICsgemVybyBwYWRkZWQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAwMC4uLiA5OSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgICAgIHwgTnVtZXJpYzogMyBkaWdpdHMgKyB6ZXJvIHBhZGRlZCAoPSBtaWxsaXNlY29uZHMpICAgICAgICAgICAgICB8IDAwMC4uLiA5OTkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgWm9uZSAgICAgICAgICAgICAgIHwgeiwgenogJiB6enogfCBTaG9ydCBzcGVjaWZpYyBub24gbG9jYXRpb24gZm9ybWF0IChmYWxsYmFjayB0byBPKSAgICAgICAgICAgIHwgR01ULTggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgICAgICB8IExvbmcgc3BlY2lmaWMgbm9uIGxvY2F0aW9uIGZvcm1hdCAoZmFsbGJhY2sgdG8gT09PTykgICAgICAgICAgfCBHTVQtMDg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IFosIFpaICYgWlpaIHwgSVNPODYwMSBiYXNpYyBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IC0wODAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgWlpaWiAgICAgICAgfCBMb25nIGxvY2FsaXplZCBHTVQgZm9ybWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR01ULTg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgfCAgICAgICAgICAgICAgICAgICAgfCBaWlpaWiAgICAgICB8IElTTzg2MDEgZXh0ZW5kZWQgZm9ybWF0ICsgWiBpbmRpY2F0b3IgZm9yIG9mZnNldCAwICg9IFhYWFhYKSAgfCAtMDg6MDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICB8ICAgICAgICAgICAgICAgICAgICB8IE8sIE9PICYgT09PIHwgU2hvcnQgbG9jYWxpemVkIEdNVCBmb3JtYXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdNVC04ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogIHwgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICAgICAgfCBMb25nIGxvY2FsaXplZCBHTVQgZm9ybWF0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR01ULTA4OjAwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTm90ZSB0aGF0IHRpbWV6b25lIGNvcnJlY3Rpb24gaXMgbm90IGFwcGxpZWQgdG8gYW4gSVNPIHN0cmluZyB0aGF0IGhhcyBubyB0aW1lIGNvbXBvbmVudCwgc3VjaCBhcyBcIjIwMTYtMDktMTlcIlxuICpcbiAqICMjIyBGb3JtYXQgZXhhbXBsZXNcbiAqXG4gKiBUaGVzZSBleGFtcGxlcyB0cmFuc2Zvcm0gYSBkYXRlIGludG8gdmFyaW91cyBmb3JtYXRzLFxuICogYXNzdW1pbmcgdGhhdCBgZGF0ZU9iamAgaXMgYSBKYXZhU2NyaXB0IGBEYXRlYCBvYmplY3QgZm9yXG4gKiB5ZWFyOiAyMDE1LCBtb250aDogNiwgZGF5OiAxNSwgaG91cjogMjEsIG1pbnV0ZTogNDMsIHNlY29uZDogMTEsXG4gKiBnaXZlbiBpbiB0aGUgbG9jYWwgdGltZSBmb3IgdGhlIGBlbi1VU2AgbG9jYWxlLlxuICpcbiAqIGBgYFxuICoge3sgZGF0ZU9iaiB8IGRhdGUgfX0gICAgICAgICAgICAgICAvLyBvdXRwdXQgaXMgJ0p1biAxNSwgMjAxNSdcbiAqIHt7IGRhdGVPYmogfCBkYXRlOidtZWRpdW0nIH19ICAgICAgLy8gb3V0cHV0IGlzICdKdW4gMTUsIDIwMTUsIDk6NDM6MTEgUE0nXG4gKiB7eyBkYXRlT2JqIHwgZGF0ZTonc2hvcnRUaW1lJyB9fSAgIC8vIG91dHB1dCBpcyAnOTo0MyBQTSdcbiAqIHt7IGRhdGVPYmogfCBkYXRlOidtbTpzcycgfX0gICAgICAgLy8gb3V0cHV0IGlzICc0MzoxMSdcbiAqIGBgYFxuICpcbiAqICMjIyBVc2FnZSBleGFtcGxlXG4gKlxuICogVGhlIGZvbGxvd2luZyBjb21wb25lbnQgdXNlcyBhIGRhdGUgcGlwZSB0byBkaXNwbGF5IHRoZSBjdXJyZW50IGRhdGUgaW4gZGlmZmVyZW50IGZvcm1hdHMuXG4gKlxuICogYGBgXG4gKiBAQ29tcG9uZW50KHtcbiAqICBzZWxlY3RvcjogJ2RhdGUtcGlwZScsXG4gKiAgdGVtcGxhdGU6IGA8ZGl2PlxuICogICAgPHA+VG9kYXkgaXMge3t0b2RheSB8IGRhdGV9fTwvcD5cbiAqICAgIDxwPk9yIGlmIHlvdSBwcmVmZXIsIHt7dG9kYXkgfCBkYXRlOidmdWxsRGF0ZSd9fTwvcD5cbiAqICAgIDxwPlRoZSB0aW1lIGlzIHt7dG9kYXkgfCBkYXRlOidoOm1tIGEgeid9fTwvcD5cbiAqICA8L2Rpdj5gXG4gKiB9KVxuICogLy8gR2V0IHRoZSBjdXJyZW50IGRhdGUgYW5kIHRpbWUgYXMgYSBkYXRlLXRpbWUgdmFsdWUuXG4gKiBleHBvcnQgY2xhc3MgRGF0ZVBpcGVDb21wb25lbnQge1xuICogICB0b2RheTogbnVtYmVyID0gRGF0ZS5ub3coKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuLy8gY2xhbmctZm9ybWF0IG9uXG5AUGlwZSh7bmFtZTogJ2RhdGUnLCBwdXJlOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZykge31cblxuICAvKipcbiAgICogQHBhcmFtIHZhbHVlIFRoZSBkYXRlIGV4cHJlc3Npb246IGEgYERhdGVgIG9iamVjdCwgIGEgbnVtYmVyXG4gICAqIChtaWxsaXNlY29uZHMgc2luY2UgVVRDIGVwb2NoKSwgb3IgYW4gSVNPIHN0cmluZyAoaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWUpLlxuICAgKiBAcGFyYW0gZm9ybWF0IFRoZSBkYXRlL3RpbWUgY29tcG9uZW50cyB0byBpbmNsdWRlLCB1c2luZyBwcmVkZWZpbmVkIG9wdGlvbnMgb3IgYVxuICAgKiBjdXN0b20gZm9ybWF0IHN0cmluZy5cbiAgICogQHBhcmFtIHRpbWV6b25lIEEgdGltZXpvbmUgb2Zmc2V0IChzdWNoIGFzIGAnKzA0MzAnYCksIG9yIGEgc3RhbmRhcmRcbiAgICogVVRDL0dNVCBvciBjb250aW5lbnRhbCBVUyB0aW1lem9uZSBhYmJyZXZpYXRpb24uXG4gICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSBlbmQtdXNlcidzIGxvY2FsIHN5c3RlbSB0aW1lem9uZS5cbiAgICogQHBhcmFtIGxvY2FsZSBBIGxvY2FsZSBjb2RlIGZvciB0aGUgbG9jYWxlIGZvcm1hdCBydWxlcyB0byB1c2UuXG4gICAqIFdoZW4gbm90IHN1cHBsaWVkLCB1c2VzIHRoZSB2YWx1ZSBvZiBgTE9DQUxFX0lEYCwgd2hpY2ggaXMgYGVuLVVTYCBieSBkZWZhdWx0LlxuICAgKiBTZWUgW1NldHRpbmcgeW91ciBhcHAgbG9jYWxlXShndWlkZS9pMThuI3NldHRpbmctdXAtdGhlLWxvY2FsZS1vZi15b3VyLWFwcCkuXG4gICAqIEByZXR1cm5zIEEgZGF0ZSBzdHJpbmcgaW4gdGhlIGRlc2lyZWQgZm9ybWF0LlxuICAgKi9cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdCA9ICdtZWRpdW1EYXRlJywgdGltZXpvbmU/OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgIT09IHZhbHVlKSByZXR1cm4gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZm9ybWF0RGF0ZSh2YWx1ZSwgZm9ybWF0LCBsb2NhbGUgfHwgdGhpcy5sb2NhbGUsIHRpbWV6b25lKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgaW52YWxpZFBpcGVBcmd1bWVudEVycm9yKERhdGVQaXBlLCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==