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
    template: '',
    styleUrl: './fade.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-fade'},
})
class Styles {}

@Directive({
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
        '[style.line-height]': 'lineHeight',
        '[style.--t-line-height]': 'lineHeight',
        '[style.--t-fade-size]': 'size',
        '[style.--t-fade-offset]': 'offset',
        '[attr.data-orientation]': 'orientation',
    },
})
export class TuiFade {
    protected readonly nothing = tuiWithStyles(Styles);

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

        merge(
            inject(ResizeObserverService, {self: true}),
            inject(MutationObserverService, {self: true}),
            fromEvent(el, 'scroll'),
        )
            .pipe(
                filter(() => !!el.scrollWidth),
                tuiZonefree(),
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                el.classList.toggle('_end', this.isEnd(el));
                el.classList.toggle(
                    '_start',
                    !!Math.floor(el.scrollLeft) || !!Math.floor(el.scrollTop),
                );
            });
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
