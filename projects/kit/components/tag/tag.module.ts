import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiPreventDefaultModule} from '@taiga-ui/cdk';
import {TuiLoaderModule, TuiSvgModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTagComponent} from './tag.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiPreventDefaultModule,
        TuiSvgModule,
        TuiLoaderModule,
        PolymorpheusModule,
    ],
    declarations: [TuiTagComponent],
    exports: [TuiTagComponent],
})
export class TuiTagModule {}
