import type {Provider} from '@angular/core';
import {inject} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import type {Observable} from 'rxjs';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_STARTS} from './icons';

export type TuiIconResolverHandler = TuiHandler<
    string,
    Observable<string> | Promise<string> | string
>;

export const TUI_ICON_START_RESOLVER = tuiCreateTokenFromFactory<TuiIconResolverHandler>(
    () => {
        const path = inject(TUI_ASSETS_PATH);

        return (icon) =>
            !icon || icon.includes('/')
                ? icon
                : `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg`;
    },
);

export function tuiInjectIconResolver(): TuiIconResolverHandler {
    const icons = inject(TUI_ICON_STARTS);
    const resolver = inject(TUI_ICON_START_RESOLVER);

    // eslint-disable-next-line @typescript-eslint/promise-function-async
    return (icon) => icons[icon] || resolver(icon);
}

export function tuiIconResolverProvider(useValue: TuiIconResolverHandler): Provider {
    return {
        provide: TUI_ICON_START_RESOLVER,
        useValue,
    };
}
