import {InjectionToken} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

export const TUI_SVG_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `Transform function the contents of the loaded svg file`,
        {factory: () => tuiSvgLinearGradientProcessor},
    );
