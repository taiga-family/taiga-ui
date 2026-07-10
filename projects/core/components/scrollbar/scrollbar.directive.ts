import {Directive, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_TIMELINE_SUPPORT} from '@taiga-ui/core/tokens';

import {TUI_SCROLL_REF} from './scroll-ref.directive';
import {TuiScrollbarService} from './scrollbar.service';
import {TuiScrollbarPosition} from './scrollbar-position.directive';

@Directive({
    selector: '[tuiScrollbar]',
    providers: [TuiScrollbarService],
    hostDirectives: [{directive: TuiScrollbarPosition, inputs: ['tuiScrollbar']}],
})
export class TuiScrollbarDirective {
    private readonly scrollRef = inject(TUI_SCROLL_REF);
    private readonly style = tuiInjectElement().style;

    protected readonly scrollSub = inject(TuiScrollbarService)
        .pipe(takeUntilDestroyed())
        .subscribe(([top, left]) => {
            this.scrollRef.nativeElement.style.scrollBehavior = 'auto';

            if (this.tuiScrollbar() === 'horizontal') {
                this.scrollRef.nativeElement.scrollLeft = left;
            } else {
                this.scrollRef.nativeElement.scrollTop = top;
            }

            this.scrollRef.nativeElement.style.scrollBehavior = '';
        });

    public readonly tuiScrollbar = input<'horizontal' | 'vertical'>('vertical');

    constructor() {
        if (!inject(TUI_TIMELINE_SUPPORT)) {
            inject(TuiScrollbarPosition)
                .pipe(takeUntilDestroyed())
                .subscribe((position) => Object.assign(this.style, position));
        }
    }
}
