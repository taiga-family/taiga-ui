import {Injectable} from '@angular/core';
import {TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';

import {Prompt} from './prompt.component';
import type {PromptOptions} from './prompt-options';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new PromptService(TUI_DIALOGS, Prompt, {
            heading: 'Are you sure?',
            buttons: ['Yes', 'No'],
        }),
})
export class PromptService extends TuiPopoverService<PromptOptions, boolean> {}
