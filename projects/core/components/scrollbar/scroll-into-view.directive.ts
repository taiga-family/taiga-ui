import {DestroyRef, Directive, effect, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {timer} from 'rxjs';

import {TUI_SCROLL_INTO_VIEW} from './scrollbar.component';

/**
 * Directive scrolls element into view inside tui-scrollbar
 */
@Directive({
    selector: '[tuiScrollIntoView]',
})
export class TuiScrollIntoView {
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);

    public readonly tuiScrollIntoView = input<boolean>();

    protected readonly dispatchEvent = effect(() => {
        const scroll = this.tuiScrollIntoView();

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
    });
}
