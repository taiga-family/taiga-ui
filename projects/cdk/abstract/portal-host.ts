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
    private readonly vcr!: ViewContainerRef;

    constructor(
        @Inject(INJECTOR) private readonly injector: Injector,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(AbstractTuiPortalService) portalService: AbstractTuiPortalService,
    ) {
        portalService.attach(this);
    }

    get clientRect(): ClientRect {
        return this.el.nativeElement.getBoundingClientRect();
    }

    addComponentChild<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        const parent = component.createInjector(this.injector);
        const resolver = parent.get(ComponentFactoryResolver);
        const factory = resolver.resolveComponentFactory(component.component);
        const providers = [{provide: AbstractTuiPortalHostComponent, useValue: this}];
        const injector = Injector.create({parent, providers});
        const ref = this.vcr.createComponent(factory, undefined, injector);

        ref.changeDetectorRef.detectChanges();

        return ref;
    }

    addTemplateChild<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.vcr.createEmbeddedView(templateRef, context);
    }
}
