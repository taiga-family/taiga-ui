import {InjectionToken} from '@angular/core';
import {TuiStringHandler, tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

export const TUI_SVG_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `Transform function the contents of the loaded svg file`,
        {factory: () => tuiSvgLinearGradientProcessor},
    );
