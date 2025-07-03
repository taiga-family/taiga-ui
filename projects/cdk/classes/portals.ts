/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {
    ComponentRef,
    EmbeddedViewRef,
    Provider,
    TemplateRef,
    ViewRef,
} from '@angular/core';
import {
    Directive,
    inject,
    Injectable,
    INJECTOR,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils';
import type {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class TuiPortals {
    @ViewChild('viewContainer', {read: ViewContainerRef})
    private readonly vcr!: ViewContainerRef;

    private readonly injector = inject(INJECTOR);

    protected readonly nothing = inject(TuiPortalService).attach(this);

    public addComponentChild<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        const injector = component.createInjector(this.injector);
        const ref = this.vcr.createComponent(component.component, {injector});

        ref.changeDetectorRef.detectChanges();

        return ref;
    }

    public addTemplateChild<C>(
        templateRef: TemplateRef<C>,
        context?: C,
    ): EmbeddedViewRef<C> {
        return this.vcr.createEmbeddedView(templateRef, context);
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

    public add<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        return this.safeHost.addComponentChild(component);
    }

    public remove<C>({hostView}: ComponentRef<C>): void {
        this.removeTemplate(hostView);
    }

    public addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.safeHost.addTemplateChild(templateRef, context);
    }

    public removeTemplate<C>(viewRef: EmbeddedViewRef<C> | ViewRef): void {
        if (!viewRef.destroyed) {
            viewRef.destroy();
        }
    }

    protected get safeHost(): TuiPortals {
        if (!this.host) {
            throw new TuiNoHostException();
        }

        return this.host;
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
