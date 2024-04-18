import type {Type} from '@angular/core';
import type {DefaultExport, LoadChildren, Route} from '@angular/router';
import type {Observable} from 'rxjs';

interface Options {
    path?: string;
    title?: string;
    loadComponent?: () =>
        | Observable<DefaultExport<Type<unknown>> | Type<unknown>>
        | Promise<DefaultExport<Type<unknown>> | Type<unknown>>
        | Type<unknown>;
    loadChildren?: LoadChildren;
}

export function tuiProvideRoutePageTab({
    path,
    title,
    loadComponent,
    loadChildren,
}: Options = {}): Route {
    return {
        path: path?.replace(/^\//, ''), // Error: NG04014: Invalid configuration of route: path cannot start with a slash
        loadComponent,
        loadChildren,
        data: {title},
        ...(!loadChildren && path !== ''
            ? {children: [{path: ':tab', loadComponent}]}
            : {}),
    };
}
