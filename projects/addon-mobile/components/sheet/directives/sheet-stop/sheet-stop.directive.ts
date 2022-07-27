import {Directive, ElementRef, Inject} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    takeUntil,
    throttleTime,
    withLatestFrom,
} from 'rxjs/operators';

import {
    TUI_SHEET_DRAGGED,
    TUI_SHEET_SCROLL,
} from '../../components/sheet/sheet.providers';

@Directive({
    selector: `[tuiSheetStop]`,
    providers: [TuiDestroyService],
})
export class TuiSheetStopDirective {
    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TUI_SHEET_DRAGGED) dragged$: Observable<boolean>,
        @Inject(TUI_SHEET_SCROLL) scroll$: Observable<number>,
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
