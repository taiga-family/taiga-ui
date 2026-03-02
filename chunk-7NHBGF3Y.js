import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {delay, of, startWith} from 'rxjs';

@Component({
    selector: 'example-4',
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInput,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items$ = of(inject<readonly string[]>('Pythons' as any)).pipe(
        startWith([]),
        delay(1000),
    );

    protected readonly form = new FormGroup({user: new FormControl('')});
}
`;export{o as default};
