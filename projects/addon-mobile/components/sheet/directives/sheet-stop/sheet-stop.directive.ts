import {DestroyRef, Directive, ElementRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_SCROLL_REF} from '@taiga-ui/core';
import {
    distinctUntilChanged,
    filter,
    map,
    throttleTime,
    timer,
    withLatestFrom,
} from 'rxjs';

import {TUI_SHEET_DRAGGED, TUI_SHEET_SCROLL} from '../../sheet-tokens';

@Directive({
    selector: '[tuiSheetStop]',
})
export class TuiSheetStopDirective {
    constructor() {
        const scrollRef = inject(TUI_SCROLL_REF).nativeElement;
        const destroy$ = inject(DestroyRef);
        const el: HTMLElement = inject(ElementRef).nativeElement;

        inject(TUI_SHEET_SCROLL)
            .pipe(
                map(y => Math.floor(y) > el.offsetTop),
                distinctUntilChanged(),
                withLatestFrom(inject(TUI_SHEET_DRAGGED)),
                map(([above, dragged]) => !above && !dragged),
                filter(Boolean),
                throttleTime(100),
                takeUntilDestroyed(destroy$),
            )
            .subscribe(() => {
                scrollRef.style.overflow = 'hidden';
                scrollRef.classList.remove('_stuck'); // iOS
                scrollRef.scrollTop = el.offsetTop;

                timer(100)
                    .pipe(takeUntilDestroyed(destroy$))
                    // eslint-disable-next-line rxjs/no-nested-subscribe
                    .subscribe(() => {
                        scrollRef.style.overflow = '';
                    });
            });
    }
}
