import {Directive, DoCheck, forwardRef, Inject, Self} from '@angular/core';
import {AbstractTuiControl, TuiDestroyService, TuiHandler, TuiMonth} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';

import {TuiInputMonthComponent} from './input-month.component';

@Directive({
    selector: `tui-input-month`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputMonthDirective),
        },
        TuiDestroyService,
    ],
})
export class TuiInputMonthDirective
    extends TuiAbstractTextfieldHost<TuiInputMonthComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonth | null>();

    private localizedValue = ``;

    constructor(
        @Inject(AbstractTuiControl) host: TuiInputMonthComponent,
        @Inject(TUI_MONTH_FORMATTER)
        formatter: TuiHandler<TuiMonth | null, Observable<string>>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
    ) {
        super(host);

        this.value$
            .pipe(distinctUntilChanged(), switchMap(formatter), takeUntil(destroy$))
            .subscribe(localizedValue => {
                this.localizedValue = localizedValue;
            });
    }

    get readOnly(): boolean {
        return true;
    }

    get value(): string {
        return this.localizedValue;
    }

    ngDoCheck(): void {
        this.value$.next(this.host.value);
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }
}
