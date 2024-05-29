import type {DoCheck} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiMonthRange} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/legacy/utils';
import {combineLatest, distinctUntilChanged, Subject, switchMap} from 'rxjs';

import type {TuiInputMonthRangeComponent} from './input-month-range.component';

@Directive({
    selector: 'tui-input-month-range',
    providers: [tuiAsTextfieldHost(TuiInputMonthRangeDirective)],
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
                takeUntilDestroyed(),
            )
            .subscribe(localizedValue => {
                this.localizedValue = localizedValue;
            });
    }

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
