import type {Type} from '@angular/core';
import type {Route} from '@angular/router';
import type {TuiDialogOptions} from '@taiga-ui/core';

import {TuiRoutableDialogComponent} from './routable-dialog.component';

export function tuiGenerateDialogableRoute<I>(
    component: Type<any>,
    {path = ``, ...dialogOptions}: Partial<TuiDialogOptions<I>> & {path?: string} = {},
): Route {
    return {
        path,
        component: TuiRoutableDialogComponent,
        data: {
            dialog: component,
            backUrl: path
                .split(`/`)
                .map(() => `..`)
                .join(`/`),
            isLazy: path === ``,
            dialogOptions,
        },
    };
}
