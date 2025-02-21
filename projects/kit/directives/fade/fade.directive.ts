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
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiOrientation} from '@taiga-ui/core/types';
import {fromEvent, merge} from 'rxjs';

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
    host: {
        '[style.line-height]': 'lineHeight',
        '[style.--t-line-height]': 'lineHeight',
        '[style.--t-fade-size]': 'size',
        '[style.--t-fade-offset]': 'offset',
        '[attr.data-orientation]': 'orientation',
    },
})
export class TuiFade {
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
        const el = tuiInjectElement();

        tuiWithStyles(TuiFadeStyles);
        merge(
            inject(ResizeObserverService, {self: true}),
            inject(MutationObserverService, {self: true}),
            fromEvent(el, 'scroll'),
        )
            .pipe(tuiZonefree(), takeUntilDestroyed())
            .subscribe(() => {
                el.classList.toggle('_start', !!el.scrollLeft || !!el.scrollTop);
                el.classList.toggle('_end', this.isEnd(el));
            });
    }

    private isEnd(el: HTMLElement): boolean {
        if (this.orientation === 'vertical') {
            return Math.round(el.scrollTop) < el.scrollHeight - el.clientHeight - BUFFER;
        }

        return (
            Math.round(el.scrollLeft) < el.scrollWidth - el.clientWidth - BUFFER ||
            // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
            el.scrollHeight > el.clientHeight + 4 * BUFFER
        );
    }
}
