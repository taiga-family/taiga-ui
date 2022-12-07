import {
    TUI_TEXTFIELD_DEFAULT_OPTIONS,
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldOptions,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core/directives';

/**
 * @deprecated:
 * use {@link TuiTextfieldOptions}
 */
export type TuiPrimitiveTextfieldOptions = TuiTextfieldOptions;

/**
 * @deprecated:
 * use {@link TUI_TEXTFIELD_DEFAULT_OPTIONS}
 */
export const TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS: TuiPrimitiveTextfieldOptions =
    TUI_TEXTFIELD_DEFAULT_OPTIONS;

/**
 * @deprecated:
 * use {@link TUI_TEXTFIELD_OPTIONS}
 */
export const TUI_PRIMITIVE_TEXTFIELD_OPTIONS = TUI_TEXTFIELD_OPTIONS;

/**
 * @deprecated:
 * use {@link tuiTextfieldOptionsProvider}
 */
export const tuiPrimitiveTextfieldOptionsProvider = tuiTextfieldOptionsProvider;
