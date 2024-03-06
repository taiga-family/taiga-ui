import {type Type} from '@angular/core';
import type {DefaultExport, Route} from '@angular/router';
import type {TuiDialogOptions} from '@taiga-ui/core';

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
