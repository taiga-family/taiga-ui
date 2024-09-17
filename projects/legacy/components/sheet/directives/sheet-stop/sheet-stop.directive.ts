import {DestroyRef, Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
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
    standalone: false,
    selector: '[tuiSheetStop]',
})
export class TuiSheetStopDirective {
    private readonly scrollRef = inject(TUI_SCROLL_REF).nativeElement;
    private readonly destroyRef = inject(DestroyRef);
    private readonly el = tuiInjectElement();

    protected readonly $ = inject(TUI_SHEET_SCROLL)
        .pipe(
            map((y) => Math.floor(y) > this.el.offsetTop),
            distinctUntilChanged(),
            withLatestFrom(inject(TUI_SHEET_DRAGGED)),
            map(([above, dragged]) => !above && !dragged),
            filter(Boolean),
            throttleTime(100),
            takeUntilDestroyed(this.destroyRef),
        )
        .subscribe(() => {
            this.scrollRef.style.overflow = 'hidden';
            this.scrollRef.classList.remove('_stuck'); // iOS
            this.scrollRef.scrollTop = this.el.offsetTop;

            timer(100)
                .pipe(takeUntilDestroyed(this.destroyRef))
                // eslint-disable-next-line rxjs/no-nested-subscribe
                .subscribe(() => {
                    this.scrollRef.style.overflow = '';
                });
        });
}
