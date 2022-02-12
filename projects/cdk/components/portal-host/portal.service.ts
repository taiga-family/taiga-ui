import {
    ComponentFactory,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    TemplateRef,
} from '@angular/core';
import {TuiNoHostException} from '@taiga-ui/cdk/exceptions';

import {TuiPortalHostComponent} from './portal-host.component';

/**
 * Service for displaying portals
 */
@Injectable({
    providedIn: 'root',
})
export class TuiPortalService {
    private host?: TuiPortalHostComponent;

    private get safeHost(): TuiPortalHostComponent {
        if (!this.host) {
            throw new TuiNoHostException();
        }

        return this.host;
    }

    attach(host: TuiPortalHostComponent) {
        this.host = host;
    }

    add<C>(componentFactory: ComponentFactory<C>, injector: Injector): ComponentRef<C> {
        return this.safeHost.addComponentChild(componentFactory, injector);
    }

    remove<C>({hostView}: ComponentRef<C>) {
        hostView.destroy();
    }

    addTemplate<C>(templateRef: TemplateRef<C>, context?: C): EmbeddedViewRef<C> {
        return this.safeHost.addTemplateChild(templateRef, context);
    }

    removeTemplate<C>(viewRef: EmbeddedViewRef<C>) {
        viewRef.destroy();
    }
}
