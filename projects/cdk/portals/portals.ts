import {
    type ComponentRef,
    computed,
    Directive,
    type EmbeddedViewRef,
    inject,
    INJECTOR,
    type TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {TuiVCR} from '@taiga-ui/cdk/directives/vcr';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiPortalService} from './service';

@Directive()
export abstract class TuiPortals {
    private readonly injector = inject(INJECTOR);
    // TODO(v6): use viewChild.required
    private readonly anchor = viewChild(TuiVCR);
    // TODO(v6): delete
    private readonly legacyApproach = viewChild('vcr', {read: ViewContainerRef});
    private readonly vcr = computed(() => this.anchor()?.vcr ?? this.legacyApproach()!);

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
