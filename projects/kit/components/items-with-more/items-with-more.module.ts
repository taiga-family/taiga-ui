import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItemDirective, TuiItemModule, TuiLetModule} from '@taiga-ui/cdk';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMoreDirective} from './more.directive';

@NgModule({
    imports: [CommonModule, TuiItemModule, TuiLetModule],
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
