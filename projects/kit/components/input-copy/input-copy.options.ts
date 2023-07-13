import {Provider} from '@angular/core';
import {TuiContextWithImplicit, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiHintDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputCopyOptions {
    readonly successMessage: PolymorpheusContent;
    readonly messageDirection: TuiHintDirection;
    readonly messageAppearance: string;
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
}

export const TUI_INPUT_COPY_DEFAULT_OPTIONS: TuiInputCopyOptions = {
    successMessage: ``,
    messageDirection: `bottom-left`,
    messageAppearance: ``,
    icon: ({$implicit}) => ($implicit === `s` ? `tuiIconCopy` : `tuiIconCopyLarge`),
};

export const TUI_INPUT_COPY_OPTIONS = tuiCreateOptions(TUI_INPUT_COPY_DEFAULT_OPTIONS);

export function tuiInputCopyOptionsProvider(
    options: Partial<TuiInputCopyOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_COPY_OPTIONS,
        options,
        TUI_INPUT_COPY_DEFAULT_OPTIONS,
    );
}
