import {
    contentChild,
    Directive,
    inject,
    InjectionToken,
    type Provider,
    type Type,
} from '@angular/core';

/**
 * Content for tuiOption component
 */
export const TUI_OPTION_CONTENT = new InjectionToken<Type<any>>(
    ngDevMode ? 'TUI_OPTION_CONTENT' : '',
);

export function tuiAsOptionContent(useValue: Type<any>): Provider {
    return {provide: TUI_OPTION_CONTENT, useValue};
}

@Directive()
export class TuiWithOptionContent {
    private readonly local = contentChild(TUI_OPTION_CONTENT, {descendants: true});
    private readonly global = inject<Type<any>>(TUI_OPTION_CONTENT, {optional: true});

    public get content(): Type<any> | undefined {
        return this.global ?? this.local();
    }
}
