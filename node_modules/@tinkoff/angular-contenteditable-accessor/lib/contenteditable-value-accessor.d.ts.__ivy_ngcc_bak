import { AfterViewInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class ContenteditableValueAccessor implements ControlValueAccessor, AfterViewInit, OnDestroy {
    private readonly elementRef;
    private readonly renderer;
    private observer;
    private onTouched;
    private onChange;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInput(): void;
    onBlur(): void;
    writeValue(value: string | null): void;
    registerOnChange(onChange: (value: string) => void): void;
    registerOnTouched(onTouched: () => void): void;
    setDisabledState(disabled: boolean): void;
    private static processValue;
}
