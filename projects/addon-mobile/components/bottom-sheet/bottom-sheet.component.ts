import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    input,
    viewChild,
    viewChildren,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiHeaderOptionsProvider} from '@taiga-ui/core/components/header';

const OPTIONS = {
    duration: 20,
    easing: 'ease-in',
    fill: 'forwards',
} as const;

@Component({
    selector: 'tui-bottom-sheet',
    templateUrl: './bottom-sheet.template.html',
    styleUrl: './bottom-sheet.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHeaderOptionsProvider({size: 'h5'})],
    host: {
        '[style.--t-initial]': 'stops()[0]',
        '[style.scroll-snap-type]': 'stops().length > 1 ? "y mandatory" : null',
        '(scroll.zoneless)': 'onScroll()',
        '(resize)': 'onScroll()',
    },
})
export class TuiBottomSheet {
    private readonly elements = viewChildren<ElementRef<HTMLElement>>('stops');

    private readonly content = viewChild<ElementRef<HTMLElement>>('content');

    private readonly el = tuiInjectElement();

    public readonly stops = input<readonly string[]>(['1.5rem']);

    protected onScroll(): void {
        const {clientHeight, scrollTop, scrollHeight} = this.el;
        const top = this.elements()[0]?.nativeElement.clientHeight || 0;
        const max = this.content()?.nativeElement.clientHeight || Infinity;
        const height = Math.min(clientHeight, max);
        const scrolled = Math.min(scrollTop, height - top);
        const transform = `translate3d(0, ${-1 * scrolled}px, 0)`;

        this.el.style.setProperty('--t-height', `${scrollHeight}px`);
        this.el.animate([{transform}], OPTIONS);
    }
}
