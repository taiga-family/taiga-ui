import {inject, InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {iconsPathFactory} from '@taiga-ui/core/utils';

import {TUI_ICONS_PLACE} from './icon-place';

export const TUI_ICONS_PATH: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `A handler to retrieve USE id for icon by name`,
        {factory: () => iconsPathFactory(inject(TUI_ICONS_PLACE))},
    );
