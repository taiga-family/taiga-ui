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
    private readonly hosts: TuiPortals[] = [];

    public attach(host: TuiPortals): void {
        this.hosts.push(host);
    }

    public detach(host: TuiPortals): void {
        const index = this.hosts.lastIndexOf(host);

        if (index !== -1) {
            this.hosts.splice(index, 1);
        }
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

    protected get host(): TuiPortals | undefined {
        return this.hosts[this.hosts.length - 1];
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
