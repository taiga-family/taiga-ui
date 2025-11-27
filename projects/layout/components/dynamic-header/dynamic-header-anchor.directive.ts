import {
    type AfterViewInit,
    Directive,
    inject,
    type OnDestroy,
    signal,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {WaIntersectionObserverDirective} from '@ng-web-apis/intersection-observer';

import {TuiDynamicHeaderContainerDirective} from './dynamic-header-container.directive';

@Directive({
    selector: '[tuiDynamicHeaderAnchor]',
})
export class TuiDynamicHeaderAnchorDirective implements AfterViewInit, OnDestroy {
    readonly #vcr = inject(ViewContainerRef);
    readonly #observer = inject(WaIntersectionObserverDirective);
    readonly #container = inject(TuiDynamicHeaderContainerDirective);
    public readonly templateRef = inject(TemplateRef<unknown>);
    public readonly view = this.#vcr.createEmbeddedView(this.templateRef);
    public readonly visible = signal(false);

    public ngAfterViewInit(): void {
        this.#observer.observe(this.view.rootNodes[0], ([e]) => {
            this.visible.set(!e?.isIntersecting);
            this.#container.update();
        });
    }

    public ngOnDestroy(): void {
        this.#observer.unobserve(this.view.rootNodes[0]);
    }
}
