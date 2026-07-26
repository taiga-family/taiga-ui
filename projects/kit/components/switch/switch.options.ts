import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiRadioOptions} from '@taiga-ui/core/components/radio';
import {type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiSwitchOptions extends TuiRadioOptions {
    readonly showIcons: boolean;
    readonly icon: TuiStringHandler<TuiSizeS>;
}

export const [TUI_SWITCH_OPTIONS, tuiSwitchOptionsProvider] =
    tuiCreateOptions<TuiSwitchOptions>({
        showIcons: true,
        size: 'm',
        icon: () => '@tui.check',
        appearance: ({checked}) => (checked ? 'primary' : 'secondary'),
    });
