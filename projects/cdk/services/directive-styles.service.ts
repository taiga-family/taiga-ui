import {
    ComponentFactoryResolver,
    ComponentRef,
    Inject,
    Injectable,
    INJECTOR,
    Injector,
    OnDestroy,
    Type,
} from '@angular/core';

/**
 * Service to use styles with directives
 */
@Injectable({
    providedIn: `root`,
})
export class TuiDirectiveStylesService implements OnDestroy {
    private readonly map = new Map<string, ComponentRef<unknown>>();

    constructor(
        @Inject(ComponentFactoryResolver)
        private readonly resolver: ComponentFactoryResolver,
        @Inject(INJECTOR) private readonly injector: Injector,
    ) {}

    addComponent(component: Type<unknown>): void {
        if (!this.map.has(component.name)) {
            this.map.set(
                component.name,
                this.resolver.resolveComponentFactory(component).create(this.injector),
            );
        }
    }

    ngOnDestroy(): void {
        this.map.forEach(value => value.destroy());
    }
}
