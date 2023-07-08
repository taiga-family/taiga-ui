import {InjectionToken, ValueProvider} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {TuiHintDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';

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

export const TUI_INPUT_COPY_OPTIONS = new InjectionToken<TuiInputCopyOptions>(
    `[TUI_INPUT_COPY_OPTIONS]`,
    {
        factory: () => TUI_INPUT_COPY_DEFAULT_OPTIONS,
    },
);

export const tuiInputCopyOptionsProvider: (
    options: Partial<TuiInputCopyOptions>,
) => ValueProvider = (options: Partial<TuiInputCopyOptions>) => ({
    provide: TUI_INPUT_COPY_OPTIONS,
    useValue: {...TUI_INPUT_COPY_DEFAULT_OPTIONS, ...options},
});
