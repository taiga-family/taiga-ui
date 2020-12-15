import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-action-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiActionExample1 {
    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    onClick(result: string) {
        this.notificationsService.show(result).subscribe();
    }
}
