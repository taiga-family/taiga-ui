import {NgForOf} from '@angular/common';
import type {ElementRef, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiHeaderOptionsProvider} from '@taiga-ui/layout/components/header';

const OPTIONS = {
    duration: 20,
    easing: 'ease-in',
    fill: 'forwards',
} as const;

@Component({
    standalone: true,
    selector: 'tui-bottom-sheet',
    imports: [NgForOf],
    templateUrl: './bottom-sheet.template.html',
    styleUrls: ['./bottom-sheet.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiHeaderOptionsProvider({size: 'h5'})],
    host: {
        '[style.--t-start]': 'stops[0]',
        '[style.scroll-snap-type]': 'stops.length > 1 ? "y mandatory" : null',
        '(scroll.silent)': 'onScroll()',
        '(resize)': 'onScroll()',
    },
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
