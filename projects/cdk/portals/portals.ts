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
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiPortalService} from './service';

@Directive()
export abstract class TuiPortals {
    private readonly vcr = viewChild.required('vcr', {read: ViewContainerRef});
    private readonly injector = inject(INJECTOR);

    constructor() {
        inject(TuiPortalService).attach(this);
    }

    public addComponent<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        const injector = component.createInjector(this.injector);
        const ref = this.vcr().createComponent(component.component, {injector});

        ref.changeDetectorRef.detectChanges();

        return ref;
    }

    public addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.vcr().createEmbeddedView(templateRef, context);
    }
}
