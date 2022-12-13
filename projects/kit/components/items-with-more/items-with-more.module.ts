import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItemDirective, TuiItemModule} from '@taiga-ui/cdk';
import {TuiProjectClassModule} from '@taiga-ui/kit/directives';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMoreDirective} from './more.directive';

@NgModule({
    imports: [CommonModule, TuiItemModule, TuiProjectClassModule],
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
