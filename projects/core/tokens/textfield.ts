import {
    type ElementRef,
    InjectionToken,
    type Provider,
    type Signal,
    type Type,
    type WritableSignal,
} from '@angular/core';
import {type NgControl} from '@angular/forms';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

export interface TuiTextfieldLike {
    el: HTMLElement;
    input: Signal<ElementRef<HTMLInputElement> | undefined>;
    value: WritableSignal<string>;
    focused: Signal<boolean>;
    control: Signal<NgControl | undefined>;
    auxiliaries: Signal<ReadonlyArray<Type<unknown> | null>>;
}

export const TUI_TEXTFIELD = new InjectionToken<TuiTextfieldLike>(
    ngDevMode ? 'TUI_TEXTFIELD' : '',
);

export function tuiAsTextfield(x: Type<TuiTextfieldLike>): Provider {
    return tuiProvide(TUI_TEXTFIELD, x);
}
