import {InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {DEFAULT_ICONS_PATH} from '@taiga-ui/core/constants';

// TODO: Consider renaming
export const TUI_ICONS_PATH: InjectionToken<
    TuiStringHandler<string>
> = new InjectionToken<TuiStringHandler<string>>(
    'A handler to retrieve USE id for icon by name',
    {
        factory: () => DEFAULT_ICONS_PATH,
    },
);
