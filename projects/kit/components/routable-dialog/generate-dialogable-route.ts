import {Type} from '@angular/core';
import {Route} from '@angular/router';
import {TuiDialogOptions} from '@taiga-ui/core';

import {TuiRoutableDialogComponent} from './routable-dialog.component';

export function tuiGenerateDialogableRoute<I>(
    component: Type<any>,
    {path, ...dialogOptions}: Partial<TuiDialogOptions<I>> & {path?: string} = {},
): Route {
    const processedPath = path ?? ``;

    return {
        path: processedPath,
        component: TuiRoutableDialogComponent,
        data: {
            dialog: component,
            backUrl: processedPath
                .split(`/`)
                .map(() => `..`)
                .join(`/`),
            isLazy: processedPath === ``,
            dialogOptions,
        },
    };
}
