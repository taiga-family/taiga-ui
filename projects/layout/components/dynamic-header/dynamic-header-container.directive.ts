import {Directive, signal, type TemplateRef} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {distinctUntilChanged, fromEvent, map, pairwise} from 'rxjs';

import {type TuiDynamicHeaderAnchorDirective} from './dynamic-header-anchor.directive';

@Directive({
    selector: '[tuiDynamicHeaderContainer]',
    hostDirectives: [WaIntersectionRoot, WaIntersectionObserverDirective],
    host: {waIntersectionRootMargin: '-44px 0px 1000000% 0px'},
})
export class TuiDynamicHeaderContainerDirective {
    private readonly el = tuiInjectElement();
    private readonly headers = signal<TuiDynamicHeaderAnchorDirective[]>([]);
    public readonly hiddenHeaders = signal<Array<TemplateRef<unknown>>>([]);

    public readonly scrollDir = toSignal(
        fromEvent(this.el, 'scroll').pipe(
            map(({target}) => (target as HTMLElement).scrollTop),
            pairwise(),
            map(([prev, next]) => (next > prev ? -1 : 1)),
            distinctUntilChanged(),
            tuiZoneOptimized(),
        ),
    );

    public register(anchor: TuiDynamicHeaderAnchorDirective): void {
        this.headers.update((headers) => [...headers, anchor]);
    }

    public unregister(anchor: TuiDynamicHeaderAnchorDirective): void {
        this.headers.update((headers) => headers.filter((h) => h !== anchor));
    }

    public update(): void {
        this.hiddenHeaders.set(
            this.headers()
                .filter((h) => h.visible())
                .map((h) => h.templateRef),
        );
    }
}
