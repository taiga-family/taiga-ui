import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';

import {NotificationsComponent} from './notifications.component';
import {TuiNotificationsExample1} from './examples/1';
import {ToastrModule} from './examples/1/toastr/toastr.module';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiAvatarModule,
        TuiAddonDocModule,
        ToastrModule,
        RouterModule.forChild(generateRoutes(NotificationsComponent)),
    ],
    declarations: [NotificationsComponent, TuiNotificationsExample1],
    exports: [NotificationsComponent],
})
export class NotificationsModule {}
