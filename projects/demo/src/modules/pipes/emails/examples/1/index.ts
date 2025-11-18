import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDataList, TuiLabel, TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDataList,
        TuiDataListWrapper,
        TuiEmailsPipe,
        TuiLabel,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected default = '';
    protected custom = '';

    protected readonly emails = ['google.com', 'github.com', 'taiga-ui.dev'];
}
