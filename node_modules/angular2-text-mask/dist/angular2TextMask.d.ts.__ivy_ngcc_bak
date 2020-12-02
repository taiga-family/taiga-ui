import { ElementRef, OnChanges, Provider, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class TextMaskConfig {
    mask: Array<string | RegExp> | ((raw: string) => Array<string | RegExp>) | false;
    guide?: boolean;
    placeholderChar?: string;
    pipe?: (conformedValue: string, config: TextMaskConfig) => false | string | object;
    keepCharPositions?: boolean;
    showMask?: boolean;
}
export declare const MASKEDINPUT_VALUE_ACCESSOR: Provider;
export declare class MaskedInputDirective implements ControlValueAccessor, OnChanges {
    private _renderer;
    private _elementRef;
    private _compositionMode;
    textMaskConfig: TextMaskConfig;
    onChange: (_: any) => void;
    onTouched: () => void;
    private textMaskInputElement;
    private inputElement;
    /** Whether the user is creating a composition string (IME events). */
    private _composing;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, _compositionMode: boolean);
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    _handleInput(value: any): void;
    _setupMask(create?: boolean): void;
    _compositionStart(): void;
    _compositionEnd(value: any): void;
}
export declare class TextMaskModule {
}
export { conformToMask } from 'text-mask-core/dist/textMaskCore';
