import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocSourceCodeComponent} from './source-code.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiButtonModule],
    declarations: [TuiDocSourceCodeComponent],
    exports: [TuiDocSourceCodeComponent],
})
export class TuiDocSourceCodeModule {}
