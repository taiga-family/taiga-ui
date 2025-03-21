import type {AfterViewInit, OnDestroy} from '@angular/core';
import {Directive, inject, signal, TemplateRef, ViewContainerRef} from '@angular/core';
import {WaIntersectionObserverDirective} from '@ng-web-apis/intersection-observer';

import {TuiDynamicHeaderContainerDirective} from './dynamic-header-container.directive';

@Directive({
    standalone: true,
    selector: '[tuiDynamicHeaderAnchor]',
})
export class TuiDynamicHeaderAnchorDirective implements AfterViewInit, OnDestroy {
    private readonly viewContainer = inject(ViewContainerRef);
    private readonly observer = inject(WaIntersectionObserverDirective);
    private readonly container = inject(TuiDynamicHeaderContainerDirective);
    public readonly templateRef = inject(TemplateRef<unknown>);
    public readonly view = this.viewContainer.createEmbeddedView(this.templateRef);
    public readonly visible = signal(false);

    public ngAfterViewInit(): void {
        this.observer.observe(this.view.rootNodes[0], ([e]) => {
            this.visible.set(!e?.isIntersecting);
            this.container.update();
        });
    }

    public ngOnDestroy(): void {
        this.observer.unobserve(this.view.rootNodes[0]);
    }
}
