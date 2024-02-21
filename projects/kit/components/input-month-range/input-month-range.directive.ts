import {Directive, DoCheck, inject} from '@angular/core';
import {TuiDestroyService, TuiMonthRange} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {combineLatest, distinctUntilChanged, Subject, switchMap, takeUntil} from 'rxjs';

import {TuiInputMonthRangeComponent} from './input-month-range.component';

@Directive({
    selector: 'tui-input-month-range',
    providers: [tuiAsTextfieldHost(TuiInputMonthRangeDirective), TuiDestroyService],
})
export class TuiInputMonthRangeDirective
    extends AbstractTuiTextfieldHost<TuiInputMonthRangeComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonthRange | null>();

    private localizedValue: [string, string] = ['', ''];

    constructor() {
        super();

        const formatter = inject(TUI_MONTH_FORMATTER);

        this.value$
            .pipe(
                distinctUntilChanged(),
                switchMap((value: TuiMonthRange | null) =>
                    combineLatest([
                        formatter(value?.from || null),
                        formatter(value?.to || null),
                    ]),
                ),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(localizedValue => {
                this.localizedValue = localizedValue;
            });
    }

    override get readOnly(): boolean {
        return true;
    }

    override get value(): string {
        return this.localizedValue[0]
            ? this.host.computeValue(...this.localizedValue)
            : '';
    }

    ngDoCheck(): void {
        this.value$.next(this.host.value);
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
