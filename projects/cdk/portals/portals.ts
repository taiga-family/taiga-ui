/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {
    type ComponentRef,
    Directive,
    type EmbeddedViewRef,
    inject,
    INJECTOR,
    type TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
// eslint-disable-next-line no-restricted-imports
import {POLYMORPHEUS_CONTEXT, type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiPortalService} from './service';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class TuiPortals {
    private readonly vcr = viewChild.required('vcr', {read: ViewContainerRef});
    private readonly injector = inject(INJECTOR);

    constructor() {
        inject(TuiPortalService).attach(this);
    }

    public addComponent<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        // TODO: Remove after updating to polymorpheus v5
        const context = component['i'].get(POLYMORPHEUS_CONTEXT, {optional: true});
        const injector = component.createInjector(this.injector, context || undefined);
        const ref = this.vcr().createComponent(component.component, {injector});

        ref.changeDetectorRef.detectChanges();

        return ref;
    }

    public addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.vcr().createEmbeddedView(templateRef, context);
    }
}
