import {tuiIsNumber} from '@taiga-ui/cdk';

declare const global: {Date: typeof Date};

const OriginalDate = global.Date;

export function tuiMockCurrentDate(dateOrNumber: Date | number): void {
    const date: Date = tuiIsNumber(dateOrNumber)
        ? new OriginalDate(dateOrNumber)
        : dateOrNumber;

    class MockDate extends OriginalDate {
        constructor() {
            super();

            return date;
        }
    }

    global.Date = MockDate as typeof Date;
}

export function tuiRestoreRealDate(): void {
    global.Date = OriginalDate;
}
