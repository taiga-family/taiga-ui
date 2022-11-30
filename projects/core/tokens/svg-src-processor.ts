import {InjectionToken} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {TuiHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {identity} from 'rxjs';

export const TUI_SVG_SRC_PROCESSOR = new InjectionToken<
    TuiHandler<
        string | SafeResourceUrl | PolymorpheusContent,
        string | SafeResourceUrl | PolymorpheusContent
    >
>(`[TUI_SVG_SRC_PROCESSOR]: Source path processor for svg`, {
    factory: () => identity,
});
