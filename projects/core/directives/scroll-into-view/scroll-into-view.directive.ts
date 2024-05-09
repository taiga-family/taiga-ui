import {DestroyRef, Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {TUI_SCROLL_INTO_VIEW} from '@taiga-ui/core/constants';
import {timer} from 'rxjs';

/**
 * Directive scrolls element into view inside tui-scrollbar
 */
@Directive({
    selector: '[tuiScrollIntoView]',
})
export class TuiScrollIntoViewDirective {
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);

    @Input()
    public set tuiScrollIntoView(scroll: boolean) {
        if (!scroll) {
            return;
        }

        // Timeout is necessary in order to give element render cycle to get into its final spot
        // (for example if it is inside dropdown box which has to be positioned first)
        timer(0)
            .pipe(takeUntilDestroyed(this.destroyRef))
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
