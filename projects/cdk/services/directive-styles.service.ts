import {
    ComponentFactoryResolver,
    createComponent,
    EnvironmentInjector,
    inject,
    Injectable,
    INJECTOR,
    OnDestroy,
    Type,
} from '@angular/core';

// TODO: Add cleanup with DestroyRef in Angular 16+ and replace service with just a map from a token
export function tuiWithStyles(component: Type<unknown>): void {
    const map = inject(TuiDirectiveStylesService).map;
    const environmentInjector = inject(EnvironmentInjector);

    if (!map.has(component)) {
        map.set(component, createComponent(component, {environmentInjector}));
    }
}

/**
 * @deprecated use {@link tuiWithStyles} instead
 */
@Injectable({
    providedIn: 'root',
})
export class TuiDirectiveStylesService implements OnDestroy {
    private readonly resolver = inject(ComponentFactoryResolver);
    private readonly injector = inject(INJECTOR);

    public readonly map = new Map();

    public addComponent(component: Type<unknown>): void {
        if (!this.map.has(component)) {
            this.map.set(
                component,
                this.resolver.resolveComponentFactory(component).create(this.injector),
            );
        }
    }

    public ngOnDestroy(): void {
        this.map.forEach(component => component.destroy());
    }
}
