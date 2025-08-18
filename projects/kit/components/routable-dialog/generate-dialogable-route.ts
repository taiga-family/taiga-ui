import {type Type} from '@angular/core';
import {type DefaultExport, type Route} from '@angular/router';
import {type TuiDialogOptions} from '@taiga-ui/core/components/dialog';

export function tuiGenerateDialogableRoute<I>(
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
