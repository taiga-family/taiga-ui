import {Directive, DoCheck, Inject, Self} from '@angular/core';
import {
    AbstractTuiControl,
    TuiDestroyService,
    TuiHandler,
    TuiMonth,
    TuiMonthRange,
} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {combineLatest, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';

import {TuiInputMonthRangeComponent} from './input-month-range.component';

@Directive({
    selector: `tui-input-month-range`,
    providers: [tuiAsTextfieldHost(TuiInputMonthRangeDirective), TuiDestroyService],
})
export class TuiInputMonthRangeDirective
    extends AbstractTuiTextfieldHost<TuiInputMonthRangeComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonthRange | null>();

    private localizedValue: [string, string] = [``, ``];

    constructor(
        @Inject(AbstractTuiControl) host: TuiInputMonthRangeComponent,
        @Inject(TUI_MONTH_FORMATTER)
        formatter: TuiHandler<TuiMonth | null, Observable<string>>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        super(host);

        this.value$
            .pipe(
                distinctUntilChanged(),
                switchMap((value: TuiMonthRange | null) =>
                    combineLatest([
                        formatter(value?.from || null),
                        formatter(value?.to || null),
                    ]),
                ),
                takeUntil(destroy$),
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
            : ``;
    }

    ngDoCheck(): void {
        this.value$.next(this.host.value);
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
