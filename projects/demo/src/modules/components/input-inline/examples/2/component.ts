import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-inline-example-2',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
    styleUrls: ['./style.less'],
})
export class TuiInputInlineExample2 {
    heading = 'Заголовок страницы';
    editing = false;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    toggle() {
        this.editing = !this.editing;
    }

    onFocusedChange(focused: boolean) {
        if (!focused) {
            this.editing = false;
            this.saveHeading(this.heading);
        }
    }

    private saveHeading(newHeading: string) {
        this.notifications
            .showNotification(newHeading, {label: 'Новый заголовок'})
            .subscribe();
    }
}
