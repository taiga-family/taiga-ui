import {type ProviderToken, type Type} from '@angular/core';
import {type DefaultExport, type Route} from '@angular/router';
import {TuiModalService} from '@taiga-ui/core';

export function tuiGenerateDialogableRoute<I>(
    component: Type<any> | (() => Promise<DefaultExport<Type<any>> | Type<any>>),
    {
        path = '',
        outlet = '',
        ...dialogOptions
    }: Partial<I> & {
        path?: string;
        outlet?: string;
        service?: ProviderToken<TuiModalService<I>>;
    } = {},
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
