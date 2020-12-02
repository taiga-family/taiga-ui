/**
 * Link lies about config object having all the same configurations so separate interface is required
 * {@link https://github.com/text-mask/text-mask/blob/master/component-documentation.md#pipe}
 */
export interface TuiTextMaskConfig {
    readonly rawValue: string;
    readonly previousConformedValue?: string;
    readonly currentCaretPosition?: number;
}
