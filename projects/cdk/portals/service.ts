/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import {
    type ComponentRef,
    type EmbeddedViewRef,
    Injectable,
    type Provider,
    type TemplateRef,
} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {type TuiPortals} from './portals';

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
