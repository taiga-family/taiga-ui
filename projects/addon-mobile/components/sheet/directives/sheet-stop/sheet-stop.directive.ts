import {Directive, ElementRef, Inject} from '@angular/core';
import {TuiDestroyService, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {
    distinctUntilChanged,
    filter,
    map,
    takeUntil,
    throttleTime,
    withLatestFrom,
} from 'rxjs/operators';

import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Directive({
    selector: `[tuiSheetStop]`,
    providers: [TuiDestroyService],
})
export class TuiSheetStopDirective {
    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(TUI_SHEET_DRAGGED)
        dragged$: TuiInjectionTokenType<typeof TUI_SHEET_DRAGGED>,
        @Inject(TUI_SHEET_SCROLL) scroll$: TuiInjectionTokenType<typeof TUI_SHEET_SCROLL>,
        @Inject(TUI_SCROLL_REF) {nativeElement}: ElementRef<HTMLElement>,
    ) {
        scroll$
            .pipe(
                map(y => Math.floor(y) > elementRef.nativeElement.offsetTop),
                distinctUntilChanged(),
                withLatestFrom(dragged$),
                map(([above, dragged]) => !above && !dragged),
                filter(Boolean),
                throttleTime(100),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                nativeElement.style.overflow = `hidden`;
                nativeElement.classList.remove(`_stuck`); // iOS
                nativeElement.scrollTop = elementRef.nativeElement.offsetTop;

                setTimeout(() => {
                    nativeElement.style.overflow = ``;
                }, 100);
            });
    }
}
