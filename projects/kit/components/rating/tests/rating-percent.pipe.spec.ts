import {TuiRatingPercentPipe} from '../pipes/rating-percent.pipe';

describe('TuiRatingPercentPipe', () => {
    const max = 5;
    const currentValue = 5;

    const pipe = new TuiRatingPercentPipe();

    it('calculate widthPx by focused/current value', () => {
        let focusedValue = 5;

        // 5 of 5 = 100%
        expect(pipe.transform(focusedValue, currentValue, max)).toEqual(100);

        focusedValue = 4; // 4 of 5 = 80%
        expect(pipe.transform(focusedValue, currentValue, max)).toEqual(80);

        focusedValue = 3; // 3 of 5 = 60%
        expect(pipe.transform(focusedValue, currentValue, max)).toEqual(60);

        focusedValue = 2; // 2 of 5 = 40%
        expect(pipe.transform(focusedValue, currentValue, max)).toEqual(40);

        focusedValue = 1; // 1 of 5 = 20%
        expect(pipe.transform(focusedValue, currentValue, max)).toEqual(20);

        focusedValue = 0; // 0 of 5 = 100%, because using a fallback currentValue
        expect(pipe.transform(focusedValue, currentValue, max)).toEqual(100);
    });
});
