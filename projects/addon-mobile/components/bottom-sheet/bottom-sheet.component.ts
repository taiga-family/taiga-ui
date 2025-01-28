import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    EventEmitter,
    Input,
    Output,
    type QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, tuiInjectElement} from '@taiga-ui/cdk';

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
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-start]': 'stops[0]',
        '(scroll)': 'onScroll()',
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
    public readonly stops = ['1.5rem'];

    @Output()
    public readonly position = new EventEmitter<number>();

    protected onScroll(): void {
        const {clientHeight, scrollTop} = this.el;
        const top = this.elements.get(0)?.nativeElement.clientHeight || 0;
        const max = this.content?.nativeElement.clientHeight || Infinity;
        const height = Math.min(clientHeight, max);
        const scrolled = Math.min(scrollTop, height - top);
        const transform = `translate3d(0, -${scrolled}px, 0)`;

        this.el.animate([{transform}], OPTIONS);
        this.position.emit(scrolled);
    }
}
