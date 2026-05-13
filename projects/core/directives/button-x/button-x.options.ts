import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiButtonOptions} from '@taiga-ui/core/components/button';

export const [TUI_BUTTON_X_OPTIONS, tuiButtonXOptionsProvider] =
    tuiCreateOptions<TuiButtonOptions>({
        appearance: 'neutral',
        size: 's',
    });
