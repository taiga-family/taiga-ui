import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDocSourceCodeComponent} from './source-code.component';

@NgModule({
    declarations: [TuiDocSourceCodeComponent],
    imports: [CommonModule, PolymorpheusModule, TuiButtonModule],
    exports: [TuiDocSourceCodeComponent],
})
export class TuiDocSourceCodeModule {}
