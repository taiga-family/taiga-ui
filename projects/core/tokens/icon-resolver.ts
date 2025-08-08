import {inject, InjectionToken, type Provider} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';

import {TUI_ASSETS_PATH} from './assets-path';
import {TUI_ICON_REGISTRY} from './icons';

export const TUI_ICON_RESOLVER = new InjectionToken<TuiStringHandler<string>>(
    ngDevMode ? 'TUI_ICON_RESOLVER' : '',
    {
        factory: () => {
            const path = inject(TUI_ASSETS_PATH);

            return (icon) =>
                `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg`;
        },
    },
);

/**
 * @deprecated use {@link TUI_ICON_RESOLVER}
 */
export const TUI_ICON_START_RESOLVER = TUI_ICON_RESOLVER;

export function tuiInjectIconResolver(): TuiStringHandler<string> {
    const icons = inject(TUI_ICON_REGISTRY);
    const resolver = inject(TUI_ICON_RESOLVER);

    return (icon) =>
        !icon || icon.includes('/') ? icon : (icons[icon] ?? resolver(icon));
}

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {provide: TUI_ICON_RESOLVER, useValue};
}
