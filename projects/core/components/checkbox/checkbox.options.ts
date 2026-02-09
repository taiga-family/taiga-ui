import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiRadioOptions} from '@taiga-ui/core/components/radio';
import {type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiCheckboxOptions extends TuiRadioOptions {
    readonly icons: Readonly<{
        checked: TuiStringHandler<TuiSizeS>;
        indeterminate: TuiStringHandler<TuiSizeS>;
    }>;
}

export const [TUI_CHECKBOX_OPTIONS, tuiCheckboxOptionsProvider] =
    tuiCreateOptions<TuiCheckboxOptions>({
        size: 'm',
        appearance: (el) =>
            el.checked || el.indeterminate ? 'primary' : 'outline-grayscale',
        icons: {
            checked: () => '@tui.check',
            indeterminate: () => '@tui.minus',
        },
    });
