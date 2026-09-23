import {type Type} from '@angular/core';
import {type DefaultExport, type Route} from '@angular/router';
import {type TuiDialogOptions} from '@taiga-ui/core/portals/dialog';

export function tuiRouteDialog<I>(
    component: Type<any> | (() => Promise<DefaultExport<Type<any>> | Type<any>>),
    {
        path = '',
        outlet = '',
        ...dialogOptions
    }: Partial<TuiDialogOptions<I>> & {path?: string; outlet?: string} = {},
): Route {
    return {
        path,
        outlet,
        loadComponent: async () => import('./routable-dialog.component'),
        data: {
            dialog: component,
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
 * @deprecated use {@link tuiRouteDialog} instead
 */
export const tuiGenerateDialogableRoute = tuiRouteDialog;
