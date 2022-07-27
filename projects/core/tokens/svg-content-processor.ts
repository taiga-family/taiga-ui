import {InjectionToken} from '@angular/core';
import {TuiStringHandler} from '@taiga-ui/cdk';
import {svgLinearGradientProcessor} from '@taiga-ui/cdk/utils/svg';

export const TUI_SVG_CONTENT_PROCESSOR: InjectionToken<TuiStringHandler<string>> =
    new InjectionToken<TuiStringHandler<string>>(
        `Transform function the contents of the loaded svg file`,
        {factory: () => svgLinearGradientProcessor},
    );
