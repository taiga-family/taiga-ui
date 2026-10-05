import {INJECTOR, type Injector, type ProviderToken, type Type} from '@angular/core';
import {type DefaultExport, type Route} from '@angular/router';
import {type TuiDialogOptions} from '@taiga-ui/core/portals/dialog';

export function tuiRouteDialog<I>(
    component: Type<any> | (() => Promise<DefaultExport<Type<any>> | Type<any>>),
    {
        path = '',
        outlet = '',
        injector = INJECTOR,
        ...dialogOptions
    }: Partial<TuiDialogOptions<I>> & {
        path?: string;
        outlet?: string;
        injector?: ProviderToken<Injector>;
    } = {},
): Route {
    return {
        path,
        outlet,
        loadComponent: async () => import('./routable-dialog.component'),
        data: {
            dialog: component,
            injector,
            backUrl: path
                .split('/')
                .map(() => '..')
                .join('/'),
            isLazy: path === '',
            dialogOptions,
        },
    };
}

/**
 * @alias
 * @deprecated use {@link tuiRouteDialog} instead
 */
export const tuiGenerateDialogableRoute = tuiRouteDialog;
