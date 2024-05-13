import type {TuiTextfieldOptionsLegacy} from '@taiga-ui/core/directives';
import {
    TUI_TEXTFIELD_DEFAULT_OPTIONS_LEGACY,
    TUI_TEXTFIELD_OPTIONS_LEGACY,
    tuiTextfieldOptionsProviderLegacy,
} from '@taiga-ui/core/directives';

/**
 * @deprecated:
 * use {@link TuiTextfieldOptionsLegacy}
 */
export type TuiPrimitiveTextfieldOptions = TuiTextfieldOptionsLegacy;

/**
 * @deprecated:
 * use {@link TUI_TEXTFIELD_DEFAULT_OPTIONS}
 */
export const TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS: TuiPrimitiveTextfieldOptions =
    TUI_TEXTFIELD_DEFAULT_OPTIONS_LEGACY;

/**
 * @deprecated:
 * use {@link TUI_TEXTFIELD_OPTIONS_LEGACY}
 */
export const TUI_PRIMITIVE_TEXTFIELD_OPTIONS = TUI_TEXTFIELD_OPTIONS_LEGACY;

/**
 * @deprecated:
 * use {@link tuiTextfieldOptionsProviderLegacy}
 */
export const tuiPrimitiveTextfieldOptionsProvider = tuiTextfieldOptionsProviderLegacy;
