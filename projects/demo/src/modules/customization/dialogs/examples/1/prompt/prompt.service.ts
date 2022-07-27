import {Injectable, Provider} from '@angular/core';
import {AbstractTuiDialogService, TUI_DIALOGS} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {PromptComponent} from './prompt.component';
import {PromptOptions} from './prompt-options';

@Injectable({
    providedIn: `root`,
})
export class PromptService extends AbstractTuiDialogService<PromptOptions> {
    readonly defaultOptions = {
        heading: `Are you sure?`,
        buttons: [`Yes`, `No`],
    } as const;

    readonly component = new PolymorpheusComponent(PromptComponent);
}

// Add this provider to app module
export const PROMPT_PROVIDER: Provider = {
    provide: TUI_DIALOGS,
    useExisting: PromptService,
    multi: true,
};
