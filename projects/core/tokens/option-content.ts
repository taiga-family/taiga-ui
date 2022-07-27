import {InjectionToken, TemplateRef} from '@angular/core';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export const TUI_OPTION_CONTENT = new InjectionToken<
    PolymorpheusContent<TuiContextWithImplicit<TemplateRef<Record<string, unknown>>>>
>(`Content for tuiOption component`);
