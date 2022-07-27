import {
    ComponentFactory,
    ComponentRef,
    Directive,
    ElementRef,
    EmbeddedViewRef,
    Inject,
    Injector,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

import {AbstractTuiPortalService} from './portal-service';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class AbstractTuiPortalHostComponent {
    @ViewChild(`viewContainer`, {read: ViewContainerRef})
    viewContainerRef!: ViewContainerRef;

    constructor(
        @Inject(ElementRef)
        readonly elementRef: ElementRef<HTMLElement>,
        @Inject(AbstractTuiPortalService) portalService: AbstractTuiPortalService,
    ) {
        portalService.attach(this);
    }

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    addComponentChild<C>(
        componentFactory: ComponentFactory<C>,
        injector: Injector,
    ): ComponentRef<C> {
        return this.viewContainerRef.createComponent<C>(
            componentFactory,
            undefined,
            Injector.create({
                parent: injector,
                providers: [
                    {
                        provide: AbstractTuiPortalHostComponent,
                        useValue: this,
                    },
                ],
            }),
        );
    }

    addTemplateChild<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.viewContainerRef.createEmbeddedView(templateRef, context);
    }
}
