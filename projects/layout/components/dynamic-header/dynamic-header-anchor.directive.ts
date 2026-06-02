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

@Directive({selector: '[tuiDynamicHeaderAnchor]', host: {'[class._header]': 'true'}})
export class TuiDynamicHeaderAnchorDirective implements AfterViewInit, OnDestroy {
    private readonly vcr = inject(ViewContainerRef);
    private readonly observer = inject(WaIntersectionObserverDirective);
    private readonly container = inject(TuiDynamicHeaderContainerDirective);

    public readonly templateRef = inject(TemplateRef<unknown>);
    public readonly view = this.vcr.createEmbeddedView(this.templateRef);
    public readonly visible = signal(false);

    public ngAfterViewInit(): void {
        this.container.register(this);
        this.observer.observe(this.view.rootNodes[0], ([e]) => {
            const isIntersecting = e?.isIntersecting ?? false;
            const target = e?.target as HTMLElement;

            this.visible.set(!isIntersecting);

            if (isIntersecting) {
                target.classList.remove('_hidden');
            } else {
                target.classList.add('_hidden');
            }

            this.container.update();
        });
    }

    public ngOnDestroy(): void {
        this.observer.unobserve(this.view.rootNodes[0]);
        this.container.unregister(this);
    }
}
