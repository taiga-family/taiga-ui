import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiResizeModule} from '@taiga-ui/cdk';

import {TuiBadgedContentComponent} from './badged-content.component';
import {TuiBadgedContentDirective} from './badged-content.directive';

@NgModule({
    imports: [CommonModule, TuiResizeModule],
    declarations: [TuiBadgedContentComponent, TuiBadgedContentDirective],
    exports: [TuiBadgedContentComponent, TuiBadgedContentDirective],
})
export class TuiBadgedContentModule {}
