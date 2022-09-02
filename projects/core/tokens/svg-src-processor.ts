import {InjectionToken} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const TUI_SVG_SRC_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(`Source path processor for svg`, {
        factory: () => identity,
    });
