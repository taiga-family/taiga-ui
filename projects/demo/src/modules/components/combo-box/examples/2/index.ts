import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiInitialsPipe,
    TuiLoaderModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiComboBoxModule} from '@taiga-ui/kit';

import {databaseMockData} from './database-mock-data';
import {RequestService} from './request.service';

@Component({
    standalone: true,
    selector: 'tui-combo-box-example-2',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        ReactiveFormsModule,
        TuiLetModule,
        TuiComboBoxModule,
        TuiDataListModule,
        TuiAvatarComponent,
        TuiLoaderModule,
        TuiInitialsPipe,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [RequestService],
})
export default class ExampleComponent {
    protected readonly service = inject(RequestService);

    protected search: string | null = '';

    protected readonly control = new FormControl(databaseMockData[0]);
}
