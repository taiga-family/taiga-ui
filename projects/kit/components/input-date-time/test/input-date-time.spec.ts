import {ChangeDetectionStrategy, Component, viewChild} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {provideTaiga} from '@taiga-ui/core';
import {TuiInputDateTime, TuiInputDateTimeDirective} from '@taiga-ui/kit';

describe('InputDateTime bounds', () => {
    const minDay = new TuiDay(2026, 0, 1);
    const maxDay = new TuiDay(2026, 11, 31);

    @Component({
        imports: [ReactiveFormsModule, TuiInputDateTime],
        template: `
            <tui-textfield>
                <input
                    tuiInputDateTime
                    [formControl]="control"
                    [max]="max"
                    [min]="min"
                />
            </tui-textfield>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly input = viewChild.required(TuiInputDateTimeDirective);
        public readonly control = new FormControl(null);
        public min: TuiDay | readonly [TuiDay, TuiTime | null] = minDay;
        public max: TuiDay | readonly [TuiDay, TuiTime | null] = maxDay;
    }

    it.each([
        [minDay, maxDay],
        [[minDay, null] as const, maxDay],
        [minDay, [maxDay, null] as const],
    ])('uses full-day bounds for %p and %p', (min, max) => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        const fixture = TestBed.createComponent(Test);
        const host = fixture.componentInstance;

        host.min = min;
        host.max = max;
        fixture.detectChanges();

        expect(host.input().minTime()).toEqual(new TuiTime(0, 0));
        expect(host.input().maxTime()).toEqual(new TuiTime(23, 59, 59, 999));
    });

    it('keeps explicitly supplied boundary times', () => {
        TestBed.configureTestingModule({imports: [Test], providers: [provideTaiga()]});
        const fixture = TestBed.createComponent(Test);
        const host = fixture.componentInstance;
        const minTime = new TuiTime(9, 0);
        const maxTime = new TuiTime(17, 30);

        host.min = [minDay, minTime];
        host.max = [maxDay, maxTime];
        fixture.detectChanges();

        expect(host.input().minTime()).toBe(minTime);
        expect(host.input().maxTime()).toBe(maxTime);
    });
});
