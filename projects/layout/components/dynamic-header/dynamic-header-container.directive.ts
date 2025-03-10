import type {QueryList, TemplateRef} from '@angular/core';
import {ContentChildren, Directive, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged, fromEvent, map, pairwise} from 'rxjs';

import {TuiDynamicHeaderAnchorDirective} from './dynamic-header-anchor.directive';

@Directive({
    standalone: true,
    selector: '[tuiDynamicHeaderContainer]',
    hostDirectives: [WaIntersectionRoot, WaIntersectionObserverDirective],
    host: {
        waIntersectionRootMargin: '-44px 0px 1000000% 0px',
    },
})
export class TuiDynamicHeaderContainerDirective {
    private readonly el = tuiInjectElement();

    @ContentChildren(TuiDynamicHeaderAnchorDirective, {
        descendants: true,
    })
    protected readonly headers: QueryList<TuiDynamicHeaderAnchorDirective> = EMPTY_QUERY;

    public hiddenHeaders = signal<Array<TemplateRef<unknown>>>([]);

    public scrollDir = toSignal(
        fromEvent(this.el, 'scroll').pipe(
            map(({target}) => (target as HTMLElement).scrollTop),
            pairwise(),
            map(([prev, next]) => (next > prev ? 'DOWN' : 'UP')),
            distinctUntilChanged(),
            tuiZoneOptimized(),
        ),
    );

    public update(): void {
        this.hiddenHeaders.set(
            this.headers.filter((h) => h.visible()).map((h) => h.templateRef),
        );
    }
}
