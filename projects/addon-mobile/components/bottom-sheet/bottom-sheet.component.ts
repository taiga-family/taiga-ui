import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    Input,
    type QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, tuiInjectElement} from '@taiga-ui/cdk';
import {tuiHeaderOptionsProvider} from '@taiga-ui/layout';

const OPTIONS = {
    duration: 20,
    easing: 'ease-in',
    fill: 'forwards',
} as const;

@Component({
    standalone: true,
    selector: 'tui-bottom-sheet',
    templateUrl: './bottom-sheet.template.html',
    styleUrls: ['./bottom-sheet.style.less'],
    providers: [tuiHeaderOptionsProvider({size: 'h5'})],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-start]': 'stops[0]',
        '[style.scroll-snap-type]': 'stops.length > 1 ? "y mandatory" : null',
        '(scroll.silent)': 'onScroll()',
        '(resize)': 'onScroll()',
    },
    imports: [NgForOf],
})
export class TuiBottomSheet {
    @ViewChildren('stops')
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild('content')
    private readonly content?: ElementRef<HTMLElement>;

    private readonly el = tuiInjectElement();

    @Input()
    public stops: readonly string[] = ['1.5rem'];

    protected onScroll(): void {
        const {clientHeight, scrollTop, scrollHeight} = this.el;
        const top = this.elements.get(0)?.nativeElement.clientHeight || 0;
        const max = this.content?.nativeElement.clientHeight || Infinity;
        const height = Math.min(clientHeight, max);
        const scrolled = Math.min(scrollTop, height - top);
        const transform = `translate3d(0, ${-1 * scrolled}px, 0)`;

        this.el.style.setProperty('--t-height', `${scrollHeight}px`);
        this.el.animate([{transform}], OPTIONS);
    }
}
