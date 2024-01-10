import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiBadgeDirective} from '@taiga-ui/kit/components/badge';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiBadgedContentComponent} from './badged-content.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiSvgModule, TuiBadgeDirective],
    declarations: [TuiBadgedContentComponent],
    exports: [TuiBadgedContentComponent],
})
export class TuiBadgedContentModule {}
