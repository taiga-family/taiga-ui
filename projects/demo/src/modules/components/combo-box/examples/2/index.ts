import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {databaseMockData} from './database-mock-data';
import {RequestService} from './request.service';

@Component({
    selector: 'tui-combo-box-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [RequestService, TuiDestroyService],
    changeDetection,
})
export class TuiComboBoxExample2 {
    search = '';

    readonly control = new FormControl(databaseMockData[0]);

    constructor(@Inject(RequestService) readonly service: RequestService) {}
}
