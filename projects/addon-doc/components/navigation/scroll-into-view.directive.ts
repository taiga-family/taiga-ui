import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc/tokens';
import {tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiGetElementObscures, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {debounceTime, filter, ReplaySubject, switchMap, take} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiDocScrollIntoViewLink]',
})
export class TuiDocScrollIntoViewLink {
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

    @Input()
    public set tuiDocScrollIntoViewLink(shallWe: boolean) {
        this.scroll$.next(shallWe);
    }
}
