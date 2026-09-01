import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    inject,
    input,
    viewChild,
    viewChildren,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiHeaderOptionsProvider} from '@taiga-ui/layout/components/header';

import {TUI_BOTTOM_SHEET_OPTIONS} from './bottom-sheet.options';

const OPTIONS = {
    duration: 20,
    easing: 'ease-in',
    fill: 'forwards',
    composite: 'add',
} as const;

@Component({
    selector: 'tui-bottom-sheet',
    templateUrl: './bottom-sheet.template.html',
    styleUrl: './bottom-sheet.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHeaderOptionsProvider({size: 'h5'})],
    host: {
        '[class._bar]': 'bar()',
        '[style.--t-initial]': 'stops()[0]',
        '[style.scroll-snap-type]': 'stops().length > 1 ? "y mandatory" : null',
        '(resize)': 'onScroll()',
        '(scroll.zoneless)': 'onScroll()',
    },
})
export class TuiBottomSheet {
    private readonly elements = viewChildren<ElementRef<HTMLElement>>('stops');
    private readonly content = viewChild<ElementRef<HTMLElement>>('content');
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_BOTTOM_SHEET_OPTIONS);

    public readonly stops = input(this.options.stops);
    public readonly bar = input(this.options.bar);

    protected onScroll(): void {
        const {clientHeight, scrollTop, scrollHeight} = this.el;
        const top = this.elements()[0]?.nativeElement.clientHeight || 0;
        const max = this.content()?.nativeElement.clientHeight || Infinity;
        const height = Math.min(clientHeight, max);
        const scrolled = Math.min(scrollTop, height - top);
        const transform = `translate3d(0, ${-1 * scrolled}px, 0)`;

        this.el.style.setProperty('--t-height', `${scrollHeight}px`);
        this.el.style.setProperty('overflow', 'scroll');
        this.el.animate([{transform}], OPTIONS);
    }
}
