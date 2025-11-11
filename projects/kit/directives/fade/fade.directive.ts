import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
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
    host: {
        '[style.line-height]': 'lineHeight()',
        '[style.--t-line-height]': 'lineHeight()',
        '[style.--t-fade-size]': 'size()',
        '[style.--t-fade-offset]': 'offset()',
        '[attr.data-orientation]': 'orientation()',
        '[style.transition]': '"none"',
    },
})
export class TuiFade {
    protected readonly nothing = tuiWithStyles(Styles);

    // TODO: Remove when lh CSS units are supported: https://caniuse.com/mdn-css_types_length_lh
    public readonly lineHeight = input<string | null>(null, {alias: 'tuiFadeHeight'});

    public readonly size = input('1.5em', {alias: 'tuiFadeSize'});

    public readonly offset = input('0em', {alias: 'tuiFadeOffset'});

    public readonly orientation = input<TuiOrientation | ''>('horizontal', {
        alias: 'tuiFade',
    });

    constructor() {
        const el = tuiInjectElement();

        // TODO: Replace with TuiTransitioned when fixed:
        // https://github.com/angular/angular/issues/57846
        afterNextRender(() => el.style.setProperty('transition', ''));

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
        return this.orientation() === 'vertical'
            ? Math.round(scrollTop) < scrollHeight - clientHeight - BUFFER
            : Math.ceil(Math.abs(scrollLeft)) < scrollWidth - clientWidth - BUFFER ||
                  // horizontal multiline fade can kick in early due to hanging elements of fonts so using bigger buffer
                  scrollHeight > clientHeight + 4 * BUFFER;
    }
}
