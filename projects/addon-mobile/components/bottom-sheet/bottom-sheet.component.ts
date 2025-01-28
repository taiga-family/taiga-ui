import {NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    type ElementRef,
    Input,
    type QueryList,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY, tuiInjectElement} from '@taiga-ui/cdk';

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

    private readonly el = tuiInjectElement();

    @Input()
    readonly stops = ['1.5rem'];

    protected onScroll(): void {
        const offset = this.elements.get(0)?.nativeElement.clientHeight || 0;
        const scrolled = Math.min(this.el.scrollTop / (this.el.clientHeight - offset), 1);

        this.el.style.setProperty(
            'transform',
            `translate3d(0, calc((var(--t-start) - 100%) * ${scrolled}), 0)`,
        );

        // this.el.animate([{transform: `translate3d(0, ${-100 * scrolled}%, 0)`}], {
        //     duration: 20,
        //     easing: 'ease-in',
        //     fill: 'forwards',
        // });
    }
}
