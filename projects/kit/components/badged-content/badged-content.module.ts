import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiBadgeModule} from '@taiga-ui/kit/components/badge';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiBadgedContentComponent} from './badged-content.component';

@NgModule({
    imports: [
        CommonModule,
        TuiColorModule,
        PolymorpheusModule,
        TuiSvgModule,
        TuiBadgeModule,
    ],
    declarations: [TuiBadgedContentComponent],
    exports: [TuiBadgedContentComponent],
})
export class TuiBadgedContentModule {}
