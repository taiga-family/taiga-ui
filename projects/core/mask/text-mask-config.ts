/**
 * @deprecated Use {@link https://github.com/taiga-family/maskito Maskito}
 * Link lies about config object having all the same configurations so separate interface is required
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
 */
export interface TuiTextMaskConfig {
    readonly currentCaretPosition?: number;
    readonly previousConformedValue?: string;
    readonly rawValue: string;
}
