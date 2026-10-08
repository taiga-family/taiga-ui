import {InjectionToken} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';

/**
 * Enables experimental iOS liquid glass styles
 */
export const TUI_LIQUID_GLASS = new InjectionToken<boolean>(
    ngDevMode ? 'TUI_LIQUID_GLASS' : '',
    {factory: TUI_FALSE_HANDLER},
);
