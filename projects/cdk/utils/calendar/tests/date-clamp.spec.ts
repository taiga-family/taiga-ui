import {tuiDateClamp, TuiDay} from '@taiga-ui/cdk';

describe(`tuiDateClamp`, () => {
    const now = new Date();
    const nowYear = TuiDay.fromLocalNativeDate(now);
    const nextYear = TuiDay.fromLocalNativeDate(
        new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()),
    );
    const lastYear = TuiDay.fromLocalNativeDate(
        new Date(now.getFullYear() - 1, now.getMonth(), now.getDate()),
    );

    it(`should return the same date if it is within the range`, () => {
        const result = tuiDateClamp(nowYear);

        expect(result).toEqual(nowYear);
    });

    it(`should return the max date if the given date is greater than max`, () => {
        const result = tuiDateClamp(nextYear, undefined, nowYear);

        expect(result).toEqual(nowYear);
    });

    it(`should return the min date if the given date is less than min`, () => {
        const result = tuiDateClamp(lastYear, nowYear);

        expect(result).toEqual(nowYear);
    });

    it(`should return the max date if both min and max are provided and given date is greater than max`, () => {
        const result = tuiDateClamp(nextYear, lastYear, nowYear);

        expect(result).toEqual(nowYear);
    });

    it(`should return the min date if both min and max are provided and given date is less than min`, () => {
        const result = tuiDateClamp(lastYear, nowYear, nextYear);

        expect(result).toEqual(nowYear);
    });
});
