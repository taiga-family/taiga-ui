import {inject, Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {PromptComponent} from './prompt.component';
import {PromptOptions} from './prompt-options';

@Injectable({
    providedIn: 'root',
})
export class PromptService extends TuiPopoverService<PromptOptions, boolean> {
    protected readonly items$ = inject(TUI_DIALOGS);
    protected readonly component = new PolymorpheusComponent(PromptComponent);
    protected readonly options = {
        heading: 'Are you sure?',
        buttons: ['Yes', 'No'],
    } as const;
}
