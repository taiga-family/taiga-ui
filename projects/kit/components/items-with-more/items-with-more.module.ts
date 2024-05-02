import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItemDirective, TuiItemModule, TuiLetDirective} from '@taiga-ui/cdk';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMoreDirective} from './more.directive';

@NgModule({
    imports: [CommonModule, TuiItemModule, TuiLetDirective],
    declarations: [
        TuiItemsWithMoreComponent,
        TuiItemsWithMoreDirective,
        TuiMoreDirective,
    ],
    exports: [
        TuiItemsWithMoreComponent,
        TuiItemsWithMoreDirective,
        TuiMoreDirective,
        TuiItemDirective,
    ],
})
export class TuiItemsWithMoreModule {}
