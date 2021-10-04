import {InjectionToken} from '@angular/core';
import {identity, TuiHandler} from '@taiga-ui/cdk';

export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR: InjectionToken<
    TuiHandler<Record<string, string>, Record<string, string>>
> = new InjectionToken('Processes content in example', {factory: () => identity});
