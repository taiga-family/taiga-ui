import {Directive, ElementRef, inject, Input} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_SCROLL_INTO_VIEW} from '@taiga-ui/core/constants';
import {takeUntil, timer} from 'rxjs';

/**
 * Directive scrolls element into view inside tui-scrollbar
 */
@Directive({
    selector: '[tuiScrollIntoView]',
    providers: [TuiDestroyService],
})
export class TuiScrollIntoViewDirective {
    private readonly el: Element = inject(ElementRef).nativeElement;
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    @Input()
    public set tuiScrollIntoView(scroll: boolean) {
        if (!scroll) {
            return;
        }

        // Timeout is necessary in order to give element render cycle to get into its final spot
        // (for example if it is inside dropdown box which has to be positioned first)
        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                this.el.dispatchEvent(
                    new CustomEvent<Element>(TUI_SCROLL_INTO_VIEW, {
                        bubbles: true,
                        detail: this.el,
                    }),
                );
            });
    }
}
