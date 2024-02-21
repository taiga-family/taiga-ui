import {Directive, DoCheck, inject} from '@angular/core';
import {TuiDestroyService, TuiMonth} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {distinctUntilChanged, Subject, switchMap, takeUntil} from 'rxjs';

import {TuiInputMonthComponent} from './input-month.component';

@Directive({
    selector: 'tui-input-month',
    providers: [tuiAsTextfieldHost(TuiInputMonthDirective), TuiDestroyService],
})
export class TuiInputMonthDirective
    extends AbstractTuiTextfieldHost<TuiInputMonthComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonth | null>();

    private localizedValue = '';

    constructor() {
        super();

        this.value$
            .pipe(
                distinctUntilChanged(),
                switchMap(inject(TUI_MONTH_FORMATTER)),
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
        return this.localizedValue;
    }

    ngDoCheck(): void {
        this.value$.next(this.host.value);
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
