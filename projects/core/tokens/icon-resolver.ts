import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

export const TUI_ICON_RESOLVER = tuiCreateTokenFromFactory<TuiStringHandler<string>>(
    // TODO: Remove backwards compatibility in 4.0
    () => icon =>
        !icon || icon.includes('/') ? icon : `/assets/taiga-ui/icons/${icon}.svg`,
);

export function tuiIconResolverProvider(useValue: TuiStringHandler<string>): Provider {
    return {
        provide: TUI_ICON_RESOLVER,
        useValue,
    };
}
