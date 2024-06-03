import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDataListDirective} from '@taiga-ui/core';
import {TuiDataListWrapperComponent, TuiEmailsPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        NgIf,
        FormsModule,
        TuiDataListDirective,
        TuiDataListWrapperComponent,
        TuiEmailsPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected default = '';
    protected custom = '';

    protected readonly emails = ['google.com', 'github.com', 'taiga-ui.dev'];
}
