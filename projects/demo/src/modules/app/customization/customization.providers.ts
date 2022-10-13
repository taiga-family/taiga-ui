import {forwardRef, InjectionToken, Provider} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core';

import {CSS_VARS} from '../../tokens/css-vars';
// TODO: find the best way for prevent cycle
// eslint-disable-next-line import/no-cycle
import {TuiCustomizationComponent} from './customization.component';

export const TUI_DOC_CUSTOMIZATION_VARS = new InjectionToken<Record<string, string>>(
    `[TUI_DOC_CUSTOMIZATION_VARS]: CSS variables map`,
);
export const TUI_DOC_CUSTOMIZATION_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TuiModeDirective,
        useExisting: forwardRef(() => TuiCustomizationComponent),
    },
    {
        provide: TUI_DOC_CUSTOMIZATION_VARS,
        deps: [WINDOW, CSS_VARS],
        useFactory: (
            windowRef: Window,
            variables: readonly string[],
        ): Record<string, string> => {
            const styles = windowRef.getComputedStyle(windowRef.document.documentElement);

            return variables.reduce(
                (dictionary, variable) => ({
                    ...dictionary,
                    [variable]: styles.getPropertyValue(variable).trim(),
                }),
                {},
            );
        },
    },
];
