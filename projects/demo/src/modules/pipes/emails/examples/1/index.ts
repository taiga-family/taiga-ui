import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDataList} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        NgIf,
        FormsModule,
        TuiDataList,
        TuiEmailsPipe,
        TuiDataListWrapper,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected default = '';
    protected custom = '';

    protected readonly emails = ['google.com', 'github.com', 'taiga-ui.dev'];
}
