import {Provider} from '@angular/core';
import {
    TUI_INPUT_CARD_DEFAULT_OPTIONS,
    TuiInputCardOptions,
} from '@taiga-ui/addon-commerce/components/input-card';
import {tuiDefaultCardValidator} from '@taiga-ui/addon-commerce/constants';
import {TuiBooleanHandler, tuiCreateOptions, tuiProvideOptions} from '@taiga-ui/cdk';

export interface TuiInputCardGroupedOptions extends TuiInputCardOptions {
    readonly cardValidator: TuiBooleanHandler<string>;
    readonly exampleText: string;
    readonly exampleTextCVC: string;
}

export const TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS: TuiInputCardGroupedOptions = {
    ...TUI_INPUT_CARD_DEFAULT_OPTIONS,
    cardValidator: tuiDefaultCardValidator,
    exampleText: `0000 0000 0000 0000`,
    exampleTextCVC: `000`,
};

export const TUI_INPUT_CARD_GROUPED_OPTIONS = tuiCreateOptions(
    TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS,
);

export function tuiInputCardGroupedOptionsProvider(
    options: Partial<TuiInputCardGroupedOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_CARD_GROUPED_OPTIONS,
        options,
        TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS,
    );
}
