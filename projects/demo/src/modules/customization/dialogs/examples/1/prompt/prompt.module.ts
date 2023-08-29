import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {PromptComponent} from './prompt.component';
import {PROMPT_PROVIDER} from './prompt.service';

@NgModule({
    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],
    declarations: [PromptComponent],
    // Add this provider to app module (it is here for stackblitz demonstration purpose only)
    providers: [PROMPT_PROVIDER],
    exports: [PromptComponent],
})
export class PromptModule {}
