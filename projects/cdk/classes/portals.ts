/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {
    type ComponentRef,
    Directive,
    type EmbeddedViewRef,
    inject,
    Injectable,
    INJECTOR,
    type Provider,
    type TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils';
// eslint-disable-next-line no-restricted-imports
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class TuiPortals {
    private readonly vcr = viewChild.required('viewContainer', {read: ViewContainerRef});
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

/**
 * Abstract service for displaying portals
 */
@Injectable()
export abstract class TuiPortalService {
    protected host?: TuiPortals;

    public attach(host: TuiPortals): void {
        this.host = host;
    }

    public add<C>(content: PolymorpheusComponent<C>): ComponentRef<C>;
    public add<C>(content: TemplateRef<C>, context?: C): EmbeddedViewRef<C>;
    public add<C>(
        content: PolymorpheusComponent<C> | TemplateRef<C>,
        context?: C,
    ): ComponentRef<C> | EmbeddedViewRef<C> {
        if (!this.host) {
            throw new TuiNoHostException();
        }

        return content instanceof PolymorpheusComponent
            ? this.host.addComponent(content)
            : this.host.addTemplate(content, context);
    }
}

export function tuiAsPortal(portal: typeof TuiPortalService): Provider {
    return tuiProvide(TuiPortalService, portal);
}

export class TuiNoHostException extends Error {
    constructor() {
        super(
            ngDevMode
                ? 'Portals cannot be used without TuiPortalHostComponent; perhaps you forgot to wrap your application with tui-root.'
                : '',
        );
    }
}
