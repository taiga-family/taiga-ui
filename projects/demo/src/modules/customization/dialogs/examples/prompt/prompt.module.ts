import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {PromptComponent} from './prompt.component';

@NgModule({
    imports: [TuiButtonModule, PolymorpheusModule, CommonModule],
    declarations: [PromptComponent],
    exports: [PromptComponent],
})
export class PromptModule {}
