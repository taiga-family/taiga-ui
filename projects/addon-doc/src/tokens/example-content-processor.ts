import {InjectionToken} from '@angular/core';
import {TuiHandler} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

export const TUI_DOC_EXAMPLE_CONTENT_PROCESSOR: InjectionToken<
    TuiHandler<Record<string, string>, Record<string, string>>
> = new InjectionToken(`Processes content in example`, {factory: () => identity});
