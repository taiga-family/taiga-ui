import type {Type} from '@angular/core';
import {createComponent, DestroyRef, EnvironmentInjector, inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

const MAP = tuiCreateTokenFromFactory(() => {
    const map = new Map();

    inject(DestroyRef).onDestroy(() => map.forEach(component => component.destroy()));

    return map;
});

export function tuiWithStyles(component: Type<unknown>): void {
    const map = inject(MAP);
    const environmentInjector = inject(EnvironmentInjector);

    if (!map.has(component)) {
        map.set(component, createComponent(component, {environmentInjector}));
    }
}
