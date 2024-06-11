import type {Provider} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiHintDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiInputCopyOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly messageAppearance: string;
    readonly messageDirection: TuiHintDirection;
    readonly successMessage: PolymorpheusContent;
}

export const TUI_INPUT_COPY_DEFAULT_OPTIONS: TuiInputCopyOptions = {
    successMessage: '',
    messageDirection: 'bottom-left',
    messageAppearance: '',
    icon: ({$implicit}) => ($implicit === 's' ? 'tuiIconCopy' : 'tuiIconCopyLarge'),
};

export const TUI_INPUT_COPY_OPTIONS = tuiCreateToken(TUI_INPUT_COPY_DEFAULT_OPTIONS);

export function tuiInputCopyOptionsProvider(
    options: Partial<TuiInputCopyOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_COPY_OPTIONS,
        options,
        TUI_INPUT_COPY_DEFAULT_OPTIONS,
    );
}
