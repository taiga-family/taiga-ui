import {Directive, ElementRef, inject, Input} from '@angular/core';
import {TUI_DOC_PAGE_LOADED} from '@taiga-ui/addon-doc/tokens';
import {TuiDestroyService, tuiGetElementObscures} from '@taiga-ui/cdk';
import {debounceTime, filter, ReplaySubject, switchMap, takeUntil} from 'rxjs';

@Directive({
    selector: '[tuiScrollIntoViewLink]',
    providers: [TuiDestroyService],
})
export class TuiScrollIntoViewLinkDirective {
    private readonly scroll$ = new ReplaySubject<boolean>(1);

    @Input()
    set tuiScrollIntoViewLink(shallWe: boolean) {
        this.scroll$.next(shallWe);
    }

    constructor() {
        const el: HTMLElement = inject(ElementRef).nativeElement;

        inject(TUI_DOC_PAGE_LOADED)
            .pipe(
                filter(Boolean),
                switchMap(() => this.scroll$),
                debounceTime(750),
                filter(shallWe => shallWe && !!tuiGetElementObscures(el)),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(() => el.scrollIntoView());
    }
}
