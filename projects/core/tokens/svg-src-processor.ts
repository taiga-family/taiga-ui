import {InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const TUI_SVG_SRC_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `[TUI_SVG_SRC_PROCESSOR]: Source path processor for svg`,
        {
            factory: () => identity,
        },
    );
