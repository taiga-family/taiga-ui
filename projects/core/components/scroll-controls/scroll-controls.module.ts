import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiScrollControlsComponent} from './scroll-controls.component';
import {TuiScrollbarWrapperDirective} from './scrollbar-wrapper.directive';
import {TuiScrollbarDirective} from './scrollbar.directive';

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
