import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';

import {TuiScrollControlsComponent} from './scroll-controls.component';
import {TuiScrollbarDirective} from './scrollbar.directive';
import {TuiScrollbarWrapperDirective} from './scrollbar-wrapper.directive';

@NgModule({
    imports: [CommonModule, TuiLetModule],
    declarations: [
        TuiScrollbarDirective,
        TuiScrollbarWrapperDirective,
        TuiScrollControlsComponent,
    ],
    exports: [TuiScrollControlsComponent],
})
export class TuiScrollControlsModule {}
