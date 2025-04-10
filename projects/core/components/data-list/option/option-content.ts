import type {Provider, TemplateRef, Type} from '@angular/core';
import {ContentChild, Directive, inject} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * Content for tuiOption component
 */
export const TUI_OPTION_CONTENT = tuiCreateToken<
    | PolymorpheusContent<TuiContext<TemplateRef<Record<string, unknown>>>> // TODO(v5): delete
    | Type<any>
>();

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

@Directive({
    standalone: true,
})
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
