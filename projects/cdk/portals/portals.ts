import {
    type ComponentRef,
    Directive,
    type EmbeddedViewRef,
    inject,
    INJECTOR,
    type TemplateRef,
    viewChild,
} from '@angular/core';
import {TuiVCR} from '@taiga-ui/cdk/directives/vcr';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiPortalService} from './service';

@Directive()
export abstract class TuiPortals {
    private readonly injector = inject(INJECTOR);
    private readonly anchor = viewChild.required(TuiVCR);

    constructor() {
        inject(TuiPortalService).attach(this);
    }

    public addComponent<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        const injector = component.createInjector(this.injector);
        const ref = this.anchor().vcr.createComponent(component.component, {injector});

        ref.changeDetectorRef.detectChanges();

        return ref;
    }

    public addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.anchor().vcr.createEmbeddedView(templateRef, context);
    }
}
