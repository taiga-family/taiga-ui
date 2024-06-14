import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItem, TuiLet} from '@taiga-ui/cdk';

import {TuiItemsWithMoreComponent} from './items-with-more.component';
import {TuiItemsWithMoreDirective} from './items-with-more.directive';
import {TuiMore} from './more.directive';

@NgModule({
    imports: [
        TuiItem,
        TuiItemsWithMoreDirective,
        NgIf,
        TuiLet,
        NgForOf,
        AsyncPipe,
        NgTemplateOutlet,
    ],
    declarations: [TuiItemsWithMoreComponent, TuiMore],
    exports: [TuiItemsWithMoreComponent, TuiItemsWithMoreDirective, TuiMore, TuiItem],
})
export class TuiItemsWithMore {}
