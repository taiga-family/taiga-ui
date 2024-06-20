import type {DoCheck} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {TuiMonth} from '@taiga-ui/cdk/date-time';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {TUI_MONTH_FORMATTER, tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';
import {distinctUntilChanged, Subject, switchMap} from 'rxjs';

import type {TuiInputMonthComponent} from './input-month.component';

@Directive({
    selector: 'tui-input-month',
    providers: [tuiAsTextfieldHost(TuiInputMonthDirective)],
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
        return this.localizedValue;
    }

    public ngDoCheck(): void {
        this.value$.next(this.host.value);
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
