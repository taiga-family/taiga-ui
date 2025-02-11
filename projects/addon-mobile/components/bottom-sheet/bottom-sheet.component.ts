import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';

const OPTIONS = {
    duration: 20,
    easing: 'ease-in',
    fill: 'forwards',
} as const;

@Component({
    selector: 'tui-bottom-sheet',
    templateUrl: './bottom-sheet.template.html',
    styleUrls: ['./bottom-sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-start]': 'stops[0]',
        '[style.scroll-snap-type]': 'stops.length > 1 ? "y mandatory" : null',
        '(scroll.silent)': 'onScroll()',
    },
})
export class TuiBottomSheetComponent {
    @ViewChildren('stops')
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @ViewChild('content')
    private readonly content?: ElementRef<HTMLElement>;

    @Input()
    stops: readonly string[] = ['1.5rem'];

    constructor(@Inject(ElementRef) private readonly el: ElementRef<HTMLElement>) {}

    onScroll(): void {
        const {clientHeight, scrollTop, scrollHeight} = this.el.nativeElement;
        const top = this.elements.get(0)?.nativeElement.clientHeight || 0;
        const max = this.content?.nativeElement.clientHeight || Infinity;
        const height = Math.min(clientHeight, max);
        const scrolled = Math.min(scrollTop, height - top);
        const transform = `translate3d(0, ${-1 * scrolled}px, 0)`;

        this.el.nativeElement.style.setProperty('--t-height', `${scrollHeight}px`);
        this.el.nativeElement.animate([{transform}], OPTIONS);
    }
}
