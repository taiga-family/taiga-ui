import {contentChildren, Directive, signal, type TemplateRef} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
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

    protected readonly headers = contentChildren(TuiDynamicHeaderAnchorDirective, {
        descendants: true,
    });

    public hiddenHeaders = signal<Array<TemplateRef<unknown>>>([]);

    public scrollDir = toSignal(
        fromEvent(this.el, 'scroll').pipe(
            map(({target}) => (target as HTMLElement).scrollTop),
            pairwise(),
            map(([prev, next]) => (next > prev ? -1 : 1)),
            distinctUntilChanged(),
            tuiZoneOptimized(),
        ),
    );

    public update(): void {
        this.hiddenHeaders.set(
            this.headers()
                .filter((h) => h.visible())
                .map((h) => h.templateRef),
        );
    }
}
