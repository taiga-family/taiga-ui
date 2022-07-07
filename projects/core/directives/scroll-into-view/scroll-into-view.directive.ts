import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {TuiDestroyService, tuiRequiredSetter} from '@taiga-ui/cdk';
import {TUI_SCROLL_INTO_VIEW} from '@taiga-ui/core/constants';
import {Observable, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * Directive scrolls element into view inside tui-scrollbar
 */
// @dynamic
@Directive({
    selector: `[tuiScrollIntoView]`,
    providers: [TuiDestroyService],
})
export class TuiScrollIntoViewDirective {
    @Input()
    @tuiRequiredSetter()
    set tuiScrollIntoView(scroll: boolean) {
        if (!scroll) {
            return;
        }

        // Timeout is necessary in order to give element render cycle to get into its final spot
        // (for example if it is inside dropdown box which has to be positioned first)
        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.elementRef.nativeElement.dispatchEvent(
                    new CustomEvent<Element>(TUI_SCROLL_INTO_VIEW, {
                        bubbles: true,
                        detail: this.elementRef.nativeElement,
                    }),
                );
            });
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<Element>,
        @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}
}
