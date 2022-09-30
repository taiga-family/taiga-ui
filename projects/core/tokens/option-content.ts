import {InjectionToken, Provider, TemplateRef} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_OPTION_CONTENT = new InjectionToken<
    PolymorpheusContent<TuiContextWithImplicit<TemplateRef<Record<string, unknown>>>>
>(`[TUI_OPTION_CONTENT]: Content for tuiOption component`);

export function tuiAsOptionContent(
    useValue: PolymorpheusContent<
        TuiContextWithImplicit<TemplateRef<Record<string, unknown>>>
    >,
): Provider {
    return {
        provide: TUI_OPTION_CONTENT,
        useValue,
    };
}
