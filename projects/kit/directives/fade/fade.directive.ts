import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiTransitioned} from '@taiga-ui/cdk/directives/transitioned';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiOrientation} from '@taiga-ui/core/types';
import {filter, fromEvent, merge} from 'rxjs';

const BUFFER = 1; // buffer for rounding issues

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./fade.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-fade-styles',
    },
})
class TuiFadeStyles {}

@Directive({
    standalone: true,
    selector: '[tuiFade]',
    providers: [
        ResizeObserverService,
        MutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {characterData: true, subtree: true},
        },
    ],
    hostDirectives: [TuiTransitioned],
    host: {
        '[style.line-height]': 'adjustedLineHeight',
        '[style.--t-line-height]': 'adjustedLineHeight',
        '[style.--t-fade-size]': 'adjustedSize',
        '[style.--t-fade-offset]': 'adjustedOffset',
        '[style.--t-fade-scroll-height.px]': 'el.scrollHeight',
        '[attr.data-orientation]': 'orientation',
    },
})
export class TuiFade {
    protected readonly el = tuiInjectElement();

    // TODO: Remove when lh CSS units are supported: https://caniuse.com/mdn-css_types_length_lh
    @Input('tuiFadeHeight')
    public lineHeight: string | null = null;

    @Input('tuiFadeSize')
    public size = '1.5em';

    @Input('tuiFadeOffset')
    public offset = '0em';

    @Input('tuiFade')
    public orientation: TuiOrientation | '' = 'horizontal';

    constructor() {
        tuiWithStyles(TuiFadeStyles);
        merge(
            inject(ResizeObserverService, {self: true}),
            inject(MutationObserverService, {self: true}),
            fromEvent(this.el, 'scroll'),
        )
            .pipe(
                filter(() => !!this.el.scrollWidth),
                tuiZonefree(),
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                this.el.classList.toggle('_end', this.isEnd(this.el));
                this.el.classList.toggle(
                    '_start',
                    !!Math.floor(this.el.scrollLeft) || !!Math.floor(this.el.scrollTop),
                );
            });
    }

    protected get adjustedSize(): string {
        return `calc(${this.size} + var(--tui-font-offset))`;
    }

    protected get adjustedOffset(): string {
        return `calc(${this.offset} + var(--tui-font-offset))`;
    }

    protected get adjustedLineHeight(): string | null {
        const lineHeight = this.lineHeight;

        return lineHeight ? `calc(${lineHeight} + var(--tui-font-offset))` : null;
    }

    private isEnd({
        scrollTop,
        scrollLeft,
        scrollHeight,
        scrollWidth,
        clientHeight,
        clientWidth,
    }: HTMLElement): boolean {
        return this.orientation === 'vertical'
            ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER
            : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER ||
                  // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
                  scrollHeight > clientHeight + 4 * BUFFER;
    }
}
