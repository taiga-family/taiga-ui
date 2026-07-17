import {TestBed} from '@angular/core/testing';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiWeekPipe} from '@taiga-ui/experimental';

describe('WeekPipe', () => {
    let pipe: TuiWeekPipe;

    const dates = Array.from({length: 1000}, (_, day) =>
        new TuiDay(2023, 9, 1).append({day}).toJSON(),
    ).map((day) => [
        TuiDay.jsonParse(day),
        // @ts-ignore,
        Temporal.PlainDate.from(day).weekOfYear,
    ]);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [TuiWeekPipe],
        }).compileComponents();

        pipe = TestBed.inject(TuiWeekPipe);
    });

    it('calculates week correctly', () => {
        expect(dates.every(([day, week]) => pipe.transform(day) === week)).toBe(true);
    });
});
