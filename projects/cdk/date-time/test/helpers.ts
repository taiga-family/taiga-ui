declare const global: {Date: typeof Date};

const OriginalDate = global.Date;

/**
 * @deprecated: use {@link tuiMockCurrentDate} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function mockCurrentDate(dateOrNumber: Date | number): void {
    const date: Date =
        typeof dateOrNumber === 'number' ? new OriginalDate(dateOrNumber) : dateOrNumber;

    class MockDate extends OriginalDate {
        constructor() {
            super();

            return date;
        }
    }

    global.Date = MockDate as typeof Date;
}

export const tuiMockCurrentDate = mockCurrentDate;

/**
 * @deprecated: use {@link tuiRestoreRealDate} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function restoreRealDate(): void {
    global.Date = OriginalDate;
}

export const tuiRestoreRealDate = restoreRealDate;

/**
 * @deprecated: use {@link tuiMockDateInside} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function mockDateInside(dateMock: Date | number, callback: () => void): void {
    mockCurrentDate(dateMock);
    callback();
    restoreRealDate();
}

export const tuiMockDateInside = mockDateInside;

// @bad TODO: find a legal way to spoof time zone on windows
/**
 * @deprecated: use {@link tuiPendingIfNotMoscowTimeZone} instead
 * Skips the test on time zones other than `'Europe/Moscow'`.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function pendingIfNotMoscowTimeZone(): void {
    if (Intl.DateTimeFormat().resolvedOptions().timeZone !== 'Europe/Moscow') {
        pending();
    }
}

export const tuiPendingIfNotMoscowTimeZone = pendingIfNotMoscowTimeZone;
