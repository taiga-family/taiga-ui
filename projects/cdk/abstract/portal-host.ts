import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    EmbeddedViewRef,
    Inject,
    INJECTOR,
    Injector,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {AbstractTuiPortalService} from './portal-service';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class AbstractTuiPortalHostComponent {
    @ViewChild(`viewContainer`, {read: ViewContainerRef})
    viewContainerRef!: ViewContainerRef;

    constructor(
        @Inject(INJECTOR) private readonly injector: Injector,
        @Inject(ElementRef)
        readonly elementRef: ElementRef<HTMLElement>,
        @Inject(AbstractTuiPortalService) portalService: AbstractTuiPortalService,
    ) {
        portalService.attach(this);
    }

    get clientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }

    addComponentChild<C>(component: PolymorpheusComponent<C, any>): ComponentRef<C> {
        const parent = component.createInjector(this.injector);
        const resolver = parent.get(ComponentFactoryResolver);
        const factory = resolver.resolveComponentFactory(component.component);
        const injector = Injector.create({
            parent,
            providers: [
                {
                    provide: AbstractTuiPortalHostComponent,
                    useValue: this,
                },
            ],
        });

        return this.viewContainerRef.createComponent<C>(factory, undefined, injector);
    }

    addTemplateChild<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.viewContainerRef.createEmbeddedView(templateRef, context);
    }
}
