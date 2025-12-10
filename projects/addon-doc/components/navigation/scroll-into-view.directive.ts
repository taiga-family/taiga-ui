import {Directive, inject, input, type OnChanges} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc/tokens';
import {tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiGetElementObscures, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {debounceTime, filter, ReplaySubject, switchMap, take} from 'rxjs';

@Directive({
    selector: '[tuiDocScrollIntoViewLink]',
})
export class TuiDocScrollIntoViewLink implements OnChanges {
    private readonly scroll$ = new ReplaySubject<boolean>(1);
    private readonly el = tuiInjectElement();

    protected readonly sub = inject(TUI_DOC_PAGE_LOADED)
        .pipe(
            filter(Boolean),
            take(1),
            switchMap(() => this.scroll$),
            debounceTime(750, tuiZonefreeScheduler()),
            filter((shallWe) => shallWe && !!tuiGetElementObscures(this.el)),
            takeUntilDestroyed(),
        )
        .subscribe(() => this.el.scrollIntoView());

    public readonly tuiDocScrollIntoViewLink = input<boolean>(false);

    public ngOnChanges(): void {
        this.scroll$.next(this.tuiDocScrollIntoViewLink());
    }
}
