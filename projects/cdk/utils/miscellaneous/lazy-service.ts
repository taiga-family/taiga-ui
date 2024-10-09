import type {Type} from '@angular/core';
import {inject, InjectFlags, INJECTOR, Injector} from '@angular/core';

export async function tuiLazyInject<T>(loader: () => Promise<Type<T>>): Promise<T> {
    const injector = inject(INJECTOR);
    const service = await loader();

    return (
        injector.get(service, null, InjectFlags.Optional) ??
        Injector.create({
            parent: injector,
            providers: [{provide: service, useClass: service}],
        }).get(service)
    );
}
