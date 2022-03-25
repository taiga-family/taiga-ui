import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';

import {TuiNotificationsExample1} from './examples/1';
import {NotificationsComponent} from './notifications.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiButtonModule,
        RouterModule.forChild(generateRoutes(NotificationsComponent)),
    ],
    declarations: [NotificationsComponent, TuiNotificationsExample1],
    exports: [NotificationsComponent],
})
export class NotificationsModule {}
