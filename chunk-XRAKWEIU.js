import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiInput, TuiLabel} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiEmailsPipe} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiEmailsPipe,
        TuiInput,
        TuiLabel,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected default = '';
    protected custom = '';

    protected readonly emails = ['google.com', 'github.com', 'taiga-ui.dev'];
}
`;export{o as default};
