import {
    ContentChild,
    Directive,
    inject,
    InjectionToken,
    type Provider,
    type TemplateRef,
    type Type,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Content for tuiOption component
 */
export const TUI_OPTION_CONTENT = new InjectionToken<
    | PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>> // TODO(v5): delete
    | Type<any>
>(ngDevMode ? 'TUI_OPTION_CONTENT' : '');

export function tuiAsOptionContent(
    useValue:
        | PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>> // TODO(v5): delete
        | Type<any>,
): Provider {
    return {
        provide: TUI_OPTION_CONTENT,
        useValue,
    };
}

@Directive()
export class TuiWithOptionContent {
    @ContentChild(TUI_OPTION_CONTENT, {descendants: true})
    protected readonly localContent: Type<any> | null = null;

    protected readonly globalContent = inject<Type<any>>(TUI_OPTION_CONTENT, {
        optional: true,
    });

    public get content(): Type<any> | null {
        return this.globalContent ?? this.localContent;
    }
}
