import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc/tokens';
import {tuiGetElementObscures, tuiInjectElement} from '@taiga-ui/cdk';
import {debounceTime, filter, ReplaySubject, switchMap} from 'rxjs';

@Directive({
    selector: '[tuiScrollIntoViewLink]',
})
export class TuiScrollIntoViewLinkDirective {
    private readonly scroll$ = new ReplaySubject<boolean>(1);

    constructor() {
        const el = tuiInjectElement();

        inject(TUI_DOC_PAGE_LOADED)
            .pipe(
                filter(Boolean),
                switchMap(() => this.scroll$),
                debounceTime(750),
                filter(shallWe => shallWe && !!tuiGetElementObscures(el)),
                takeUntilDestroyed(),
            )
            .subscribe(() => el.scrollIntoView());
    }

    @Input()
    public set tuiScrollIntoViewLink(shallWe: boolean) {
        this.scroll$.next(shallWe);
    }
}
