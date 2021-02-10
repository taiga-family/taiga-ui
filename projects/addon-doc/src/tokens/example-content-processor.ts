import {InjectionToken} from '@angular/core';
import {identity} from '@taiga-ui/cdk';

export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR = new InjectionToken<
    (content: Record<string, string>) => Record<string, string>
>('Processes content in example', {
    factory: () => identity,
});
