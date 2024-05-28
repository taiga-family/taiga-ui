import {NgModule} from '@angular/core';
import {TuiItemDirective} from '@taiga-ui/cdk';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMoreDirective} from './more.directive';

@NgModule({
    imports: [
        TuiItemsWithMoreComponent,
        TuiItemsWithMoreDirective,
        TuiMoreDirective,
        TuiItemDirective,
    ],
    exports: [
        TuiItemsWithMoreComponent,
        TuiItemsWithMoreDirective,
        TuiMoreDirective,
        TuiItemDirective,
    ],
})
export class TuiItemsWithMore {}
