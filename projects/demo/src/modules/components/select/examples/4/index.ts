import {Component, Inject} from '@angular/core';
import {TuiNotificationsService} from '@taiga-ui/core';
import {TuiSelectComponent} from '@taiga-ui/kit';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-select-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample4 {
    readonly pythons = [
        'de la Concordia «Gabo» García Márquez',
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
        'Graham Chapman',
    ];

    value = this.pythons[0];

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    addMore(select: TuiSelectComponent<unknown>) {
        select.handleOption(select.value);
        this.notifications.show('Add more is clicked').subscribe();
    }
}
