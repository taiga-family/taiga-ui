import {
    ComponentFactoryResolver,
    Inject,
    Injectable,
    INJECTOR,
    Injector,
    Type,
} from '@angular/core';

/**
 * Service to use styles with directives
 */
@Injectable({
    providedIn: `root`,
})
export class TuiDirectiveStylesService {
    private readonly map = new Map<Type<unknown>, unknown>();

    constructor(
        @Inject(ComponentFactoryResolver)
        private readonly resolver: ComponentFactoryResolver,
        @Inject(INJECTOR) private readonly injector: Injector,
    ) {}

    addComponent(component: Type<unknown>): void {
        if (!this.map.has(component)) {
            this.map.set(
                component,
                this.resolver.resolveComponentFactory(component).create(this.injector),
            );
        }
    }
}
