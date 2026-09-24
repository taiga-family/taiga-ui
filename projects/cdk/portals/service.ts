import {
    type ComponentRef,
    type EmbeddedViewRef,
    Injectable,
    type TemplateRef,
} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {type TuiPortals} from './portals';

@Injectable()
export abstract class TuiPortalService {
    protected host?: TuiPortals;

    public attach(host: TuiPortals): void {
        this.host = host;
    }

    public add<C extends Node>(content: C): C;
    public add<C>(content: PolymorpheusComponent<C>): ComponentRef<C>;
    public add<C>(content: TemplateRef<C>, context?: C): EmbeddedViewRef<C>;
    public add<C>(
        content: Node | PolymorpheusComponent<C> | TemplateRef<C>,
        context?: C,
    ): ComponentRef<C> | EmbeddedViewRef<C> | Node {
        if (!this.host) {
            throw new TuiNoHostException();
        }

        if (content instanceof Node) {
            return this.host.addNode(content);
        }

        return content instanceof PolymorpheusComponent
            ? this.host.addComponent(content)
            : this.host.addTemplate(content, context);
    }
}

export class TuiNoHostException extends Error {
    constructor() {
        super(
            ngDevMode
                ? 'Portals cannot be used without TuiPortals component; perhaps you forgot to wrap your application with tui-root.'
                : '',
        );
    }
}
