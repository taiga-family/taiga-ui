import {Type} from '@angular/core';
import {Route} from '@angular/router';
import {TuiDialogOptions} from '@taiga-ui/core';

import {TuiRoutableDialogComponent} from './routable-dialog.component';

export function tuiGenerateDialogableRoute<I>(
    component: Type<any>,
    {path = ``, ...dialogOptions}: Partial<TuiDialogOptions<I>> & {path?: string} = {},
): Route {
    return {
        component: TuiRoutableDialogComponent,
        data: {
            backUrl: path
                .split(`/`)
                .map(() => `..`)
                .join(`/`),
            dialog: component,
            dialogOptions,
            isLazy: path === ``,
        },
        path,
    };
}
