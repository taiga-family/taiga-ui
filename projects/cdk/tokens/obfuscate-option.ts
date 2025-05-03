import type {InjectionToken, Provider} from '@angular/core';
import {Optional, SkipSelf} from '@angular/core';
import {tuiObfuscate} from '@taiga-ui/cdk/utils';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Defines the option for obfuscation.
 */
export interface TuiObfuscateOption {
    /**
     * Default function used to obfuscate a string
     * If no recipe was found
     */
    readonly default: (value: string) => string;

    /**
     * Collection of named recipes for different obfuscation scenarios.
     */
    readonly recipes: Record<string, (value: string) => string>;
}

export const TUI_OBFUSCATE_DEFAULT_OPTION: TuiObfuscateOption = {
    default: (value) => tuiObfuscate(value, '*'),
    recipes: {},
};

/**
 * Injection token for obfuscation option.
 */
export const TUI_OBFUSCATE_OPTION: InjectionToken<TuiObfuscateOption> = tuiCreateToken(
    TUI_OBFUSCATE_DEFAULT_OPTION,
);

export function tuiObfuscateOptionProvider(
    option: Partial<TuiObfuscateOption>,
): Provider {
    return {
        provide: TUI_OBFUSCATE_OPTION,
        deps: [[new Optional(), new SkipSelf(), TUI_OBFUSCATE_OPTION]],
        useFactory: (parent: TuiObfuscateOption | null): TuiObfuscateOption => ({
            ...(parent || TUI_OBFUSCATE_DEFAULT_OPTION),
            ...option,
        }),
    };
}
