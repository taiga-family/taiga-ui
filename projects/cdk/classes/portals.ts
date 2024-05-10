/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {ComponentRef, EmbeddedViewRef, Provider, TemplateRef} from '@angular/core';
import {
    Directive,
    inject,
    Injectable,
    INJECTOR,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils';
import type {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

/**
 * Abstract class for host element for dynamically created portals.
 */
@Directive()
export abstract class TuiPortalsComponent {
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
    protected host?: TuiPortalsComponent;

    public attach(host: TuiPortalsComponent): void {
        this.host = host;
    }

    public add<C>(component: PolymorpheusComponent<C>): ComponentRef<C> {
        return this.safeHost.addComponentChild(component);
    }

    public remove<C>({hostView}: ComponentRef<C>): void {
        if (!hostView.destroyed) {
            hostView.destroy();
        }
    }

    public addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.safeHost.addTemplateChild(templateRef, context);
    }

    public removeTemplate<C>(viewRef: EmbeddedViewRef<C>): void {
        if (!viewRef.destroyed) {
            viewRef.destroy();
        }
    }

    protected get safeHost(): TuiPortalsComponent {
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
        super(ngDevMode ? 'Portals cannot be used without TuiPortalHostComponent' : '');
    }
}
