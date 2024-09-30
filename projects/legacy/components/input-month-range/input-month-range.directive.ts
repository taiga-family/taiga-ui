import type {DoCheck} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk/date-time';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {TUI_MONTH_FORMATTER, tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';
import type {Observable} from 'rxjs';
import {combineLatest, distinctUntilChanged, Subject, switchMap} from 'rxjs';

import type {TuiInputMonthRangeComponent} from './input-month-range.component';

@Directive({
    standalone: false,
    selector: 'tui-input-month-range',
    providers: [tuiAsTextfieldHost(TuiInputMonthRangeDirective)],
})
export class TuiInputMonthRangeDirective
    extends AbstractTuiTextfieldHost<TuiInputMonthRangeComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonthRange | null>();

    private localizedValue: [string, string] = ['', ''];

    protected readonly formatter: TuiHandler<TuiMonth | null, Observable<string>> =
        inject(TUI_MONTH_FORMATTER);

    protected readonly $ = this.value$
        .pipe(
            distinctUntilChanged(),
            switchMap((value: TuiMonthRange | null) =>
                combineLatest([
                    this.formatter(value?.from || null),
                    this.formatter(value?.to || null),
                ]),
            ),
            takeUntilDestroyed(),
        )
        .subscribe((localizedValue) => {
            this.localizedValue = localizedValue;
        });

    public override get readOnly(): boolean {
        return true;
    }

    public override get value(): string {
        return this.localizedValue[0]
            ? this.host.computeValue(...this.localizedValue)
            : '';
    }

    public ngDoCheck(): void {
        this.value$.next(this.host.value);
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
