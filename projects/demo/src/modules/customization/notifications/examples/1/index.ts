import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';

import {ToastrService} from './toastr/toastr.service';

@Component({
    selector: 'tui-notifications-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiNotificationsExample1 {
    success = TuiNotification.Success;
    info = TuiNotification.Info;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
        @Inject(ToastrService)
        private readonly toastr: ToastrService,
    ) {
        console.log(toastr);
    }

    showBasicNotification(status: TuiNotification) {
        this.notificationsService.show(status, {status}).subscribe();
    }

    showCustomNotification(status: TuiNotification) {
        this.toastr.show(status, {status}).subscribe();
    }
}
