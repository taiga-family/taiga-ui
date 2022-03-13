import {NgModule} from '@angular/core';
import {ToastrService} from './toastr.service';
import {TuiNotificationsModule} from '@taiga-ui/core';

@NgModule({
    imports: [TuiNotificationsModule.forFeature(ToastrService)],
    providers: [
        // ToastrService,
        // {provide: TUI_NOTIFICATIONS_GROUP, useExisting: ToastrService, multi: true},
    ],
})
export class ToastrModule {}
