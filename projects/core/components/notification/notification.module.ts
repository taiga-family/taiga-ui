import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core/components/button';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';

import {TuiNotificationComponent} from './notification.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiButtonModule],
    declarations: [TuiNotificationComponent],
    exports: [TuiNotificationComponent],
})
export class TuiNotificationModule {}
