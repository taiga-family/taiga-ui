import {tuiCreateOptions, tuiObfuscate} from '@taiga-ui/cdk/utils';

/**
 * Defines the options for obfuscation.
 */
export interface TuiObfuscateOptions {
    /**
     * Default function used to obfuscate a string
     * if no recipe was found.
     */
    readonly default: (value: string, symbol?: string) => string;

    /**
     * Collection of named recipes for different obfuscation scenarios.
     */
    readonly recipes: Record<string, (value: string) => string>;
}

export const TUI_OBFUSCATE_DEFAULT_OPTIONS: TuiObfuscateOptions = {
    default: (value, symbol = '*') => tuiObfuscate(value, symbol),
    recipes: {},
};

/**
 * Injection token for obfuscation options.
 */
export const [TUI_OBFUSCATE_OPTIONS, tuiObfuscateOptionsProvider] = tuiCreateOptions(
    TUI_OBFUSCATE_DEFAULT_OPTIONS,
);
