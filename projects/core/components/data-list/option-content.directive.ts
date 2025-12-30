import {
    ContentChild,
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
    @ContentChild(TUI_OPTION_CONTENT, {descendants: true})
    protected readonly local: Type<any> | null = null;

    protected readonly global = inject<Type<any>>(TUI_OPTION_CONTENT, {optional: true});

    public get content(): Type<any> | null {
        return this.global ?? this.local;
    }
}
