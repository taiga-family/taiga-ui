import type {Type} from '@angular/core';
import {
    createComponent,
    DestroyRef,
    EnvironmentInjector,
    inject,
    InjectionToken,
} from '@angular/core';

const MAP = new InjectionToken('MAP', {
    factory: () => {
        const map = new Map();

        inject(DestroyRef).onDestroy(() =>
            map.forEach((component) => component.destroy()),
        );

        return map;
    },
});

export function tuiWithStyles(component: Type<unknown>): undefined {
    const map = inject(MAP);
    const environmentInjector = inject(EnvironmentInjector);

    if (!map.has(component)) {
        map.set(component, createComponent(component, {environmentInjector}));
    }

    return undefined;
}
