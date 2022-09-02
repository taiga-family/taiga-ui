import type {DoCheck} from '@angular/core';
import {Directive, Inject, Self} from '@angular/core';
import type {TuiInjectionTokenType, TuiMonth} from '@taiga-ui/cdk';
import {AbstractTuiControl, TuiDestroyService} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import {Subject} from 'rxjs';
import {distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';

// TODO: investigate
// @ts-ignore
import {TuiInputMonthComponent} from './input-month.component';

@Directive({
    selector: `tui-input-month`,
    providers: [tuiAsTextfieldHost(TuiInputMonthDirective), TuiDestroyService],
})
export class TuiInputMonthDirective
    extends AbstractTuiTextfieldHost<TuiInputMonthComponent>
    implements DoCheck
{
    private readonly value$ = new Subject<TuiMonth | null>();

    private localizedValue = ``;

    constructor(
        @Inject(AbstractTuiControl) host: TuiInputMonthComponent,
        @Inject(TUI_MONTH_FORMATTER)
        formatter: TuiInjectionTokenType<typeof TUI_MONTH_FORMATTER>,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        super(host);

        this.value$
            .pipe(distinctUntilChanged(), switchMap(formatter), takeUntil(destroy$))
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
